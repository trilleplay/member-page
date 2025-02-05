import {
  Alert,
  Box,
  Slider,
  Stack,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToRgba } from '@uiw/color-convert';
import debounce from 'lodash/debounce';
import { useUser } from '~/providers/UserProvider';
import PageHeader from '~/components/PageHeader';
import { useApiAccess } from '~/providers/ApiAccessProvider';

const DEFAULT_DOWN = 0;
const DEFAULT_UP = 100;

export default function LightsController() {
  const { data: session } = useSession();
  const { user } = useUser();
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);
  const [hsva, setHsva] = useState({
    h: 0, s: 0, v: 100, a: 1,
  });
  const [whiteUp, setWhiteUp] = useState(DEFAULT_UP);
  const [whiteDown, setWhiteDown] = useState(DEFAULT_DOWN);
  const [loaded, setLoaded] = useState(false);
  const { hasAccess } = useApiAccess();

  const onChange = useCallback(async () => {
    const converted = hsvaToRgba(hsva);
    const { r: red, g: green, b: blue } = converted;
    const data = {
      red: whiteDown === 0 ? red : 0,
      green: whiteDown === 0 ? green : 0,
      blue: whiteDown === 0 ? blue : 0,
      white_up: whiteUp * 2.55,
      white_down: whiteDown * 2.55,
      authToken: session?.accessToken,
    };
    const response = await fetch('/api/lights', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.status !== 500) {
      const json = await response.json();
      setStatus(json.status);
      setError(!json.sent);
    }
  }, [hsva, whiteUp, whiteDown, session?.accessToken]);

  const debouncedOnChange = useMemo(
    () => debounce(onChange, 300),
    [onChange],
  );

  useEffect(() => {
    if (loaded) {
      debouncedOnChange();
    } else {
      setLoaded(true);
    }
    return debouncedOnChange.cancel;
  }, [hsva, whiteUp, whiteDown]);

  if (!hasAccess('lights:change')) {
    return null;
  }

  if (!user?.first_name) {
    return (
      <>
        <PageHeader>lights</PageHeader>
        <p>Du måste logga in först!</p>
      </>
    );
  }

  return (
    <Stack
      alignItems={{
        xs: 'center',
        md: 'flex-start',
      }}
    >
      <Stack
        alignItems={{
          xs: 'center',
          md: 'flex-start',
        }}
        maxWidth={225}
      >
        <PageHeader>över baren</PageHeader>
        <Slider
          value={whiteUp}
          onChange={(e, value) => setWhiteUp(value as number)}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <PageHeader>under baren</PageHeader>
        <Stack direction="row" spacing={1}>
          <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
          <Box sx={{
            height: 200,
          }}
          >
            <Slider
              defaultValue={DEFAULT_DOWN}
              onChange={(e, value) => {
                setTimeout(() => {
                  setWhiteDown(value as number);
                }, 100);
              }}
              orientation="vertical"
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
        </Stack>

        <Alert
          severity={error ? 'error' : 'success'}
          sx={{ display: status ? 'flex' : 'none' }}
        >
          {status}
        </Alert>
      </Stack>
    </Stack>
  );
}
