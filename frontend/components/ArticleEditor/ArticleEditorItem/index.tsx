import { useTranslation } from 'next-i18next';
import React from 'react';
// @ts-ignore package does not have typescript types
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import
{
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { v4 as uuidv4 } from 'uuid';
import Markdown from '~/components/Markdown';
import Link from '~/components/Link';
import handleApolloError from '~/functions/handleApolloError';
import putFile from '~/functions/putFile';
import { useGetUploadDataMutation } from '~/generated/graphql';
import { useSnackbar } from '~/providers/SnackbarProvider';

export type PublishAsOption = { id: string | undefined; label: string, type: 'Member' | 'Mandate' | 'Custom' };
export type ArticleEditorProps = {
  header: string;
  body: string;
  selectedTab: 'write' | 'preview';
  onTabChange: (tab: 'write' | 'preview') => void;
  onHeaderChange: (value: string) => void;
  onImageChange: (file: File) => void;
  imageName: string;
  onBodyChange: (value: string) => void;
  publishAsOptions: PublishAsOption[];
  publishAs: PublishAsOption;
  setPublishAs: (value: PublishAsOption) => void;
};

export default function ArticleEditorItem({
  header,
  body,
  selectedTab,
  onTabChange,
  onHeaderChange,
  onBodyChange,
  onImageChange,
  imageName,
  publishAsOptions,
  publishAs,
  setPublishAs,
}: ArticleEditorProps) {
  const [fileName, setFileName] = React.useState('');
  const { showMessage } = useSnackbar();
  const { t } = useTranslation();

  const [getUploadData] = useGetUploadDataMutation({
    variables: {
      header,
      fileName,
    },
    onError: (error) => handleApolloError(error, showMessage, t),
  });

  const saveImage = async function* (_, file: File) {
    setFileName(`${uuidv4()}.${file.name.split('.').pop()}`);

    const data = await getUploadData();
    putFile(data.data.article.getUploadData.uploadUrl, file, file.type, showMessage, t);

    yield data.data.article.getUploadData.uploadUrl.split('?')[0];
    return true;
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="header-field"
        label={t('news:header')}
        onChange={(event) => onHeaderChange(event.target.value)}
        multiline
        value={header}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">{t('news:publish_as')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={publishAsOptions[0].id ?? 'none'}
          value={publishAs?.id ?? 'none'}
          label={t('news:publish_as')}
          onChange={(event) =>
            setPublishAs(
              publishAsOptions.find((option) => option.id === (event.target.value === 'none' ? undefined : event.target.value)),
            )}
        >
          {publishAsOptions.map((option) => (
            <MenuItem key={option.id} value={option.id ?? 'none'}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {imageName && (
        <Typography variant="subtitle1">
          <Typography fontWeight={500}>Current image:</Typography>
          {imageName}
        </Typography>
      )}
      <label htmlFor="contained-button-file">
        <Button
          variant="outlined"
          component="label"
          startIcon={<PhotoCamera />}
        >
          {t('news:selectImage')}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(event) => onImageChange(event.target.files[0])}
            id="contained-button-file"
          />
        </Button>
      </label>
      <Link newTab href="https://www.markdownguide.org/cheat-sheet/">{t('news:markdown_guide')}</Link>
      <ReactMde
        value={body}
        onChange={onBodyChange}
        selectedTab={selectedTab}
        onTabChange={onTabChange}
        l18n={{
          write: t('news:write'),
          preview: t('news:preview'),
          uploadingImage: t('news:uploadingImage'),
          pasteDropSelect: t('news:pasteDropSelect'),
        }}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(<Markdown content={markdown} />)}
        paste={{
          saveImage,
        }}
      />
    </Stack>
  );
}
