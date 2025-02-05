echo Setting up the developing environment, this will take a couple of minutes...
# Create the main .env file
> .env
echo 'POSTGRES_HOST=database
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=dsek
POSTGRES_VERSION=13
PGADMIN_DEFAULT_EMAIL=user@dsek.se
PGADMIN_DEFAULT_PASSWORD=password
PGADMIN_DISABLE_POSTFIX=true

MINIO_ROOT_USER=user
MINIO_ROOT_PASSWORD=password
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_USE_SSL=false

MEILI_HOST=http://search:7700
MEILI_MASTER_KEY=password
SANDBOX=true

SWISH_CALLBACK_URL=https://dsek-frontend.herokuapp.com/api/webshop/payment-callback
SWISH_URL=https://mss.cpc.getswish.net/swish-cpcapi

KEYCLOAK_ISSUER=https://portal.sandbox.dsek.se/realms/dsek
' >> .env

# Create the frontend .env file
> frontend/.env.local
echo 'NEXT_PUBLIC_MINIO_ADDRESS=http://localhost:9000
NEXT_PUBLIC_GRAPHQL_ADDRESS=http://localhost:4000/graphql
#NEXT_PUBLIC_GRAPHQL_ADDRESS=https://graphql.api.sandbox.dsek.se/
#NEXT_PUBLIC_GRAPHQL_ADDRESS=https://graphql.api.dsek.se/

SERVE_NATIVE_APP=false

MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=password

KEYCLOAK_ID=dsek-se-openid
KEYCLOAK_SECRET=keycloak-secret
KEYCLOAK_ISSUER=https://portal.sandbox.dsek.se/realms/dsek
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=nextauth-secret

SANDBOX=true
' >> frontend/.env.local

# Install npm dependencies
npm install
cd frontend
npm install
cd ../backend/services/core
npm install
cd ../../../

# Run the development docker command
docker compose --env-file .env -f docker-compose.yml -f docker-compose.minio.yml -f docker-compose.dev.yml up -d --build
