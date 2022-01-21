# ItemFinder - Mock E-Commerce Application

This repository includes the Express Server, React client, and React-Native mobile client projects. As it is currently, both of the individual clients are running on the same Express server on separate ports. It must utilize an https server to meet Google Chrome's session/cookie requirements (used by the client-side React app). All projects have been created with Typescript with the `./server/src/server.ts` being the origin. The application also uses Redis for session authentication.

## Env Variables

> The application uses Dotenv to manage the env variables- the default location for the `.env` file is in the `./server/` directory. (This can be changed if you configure the Dotenv path in `./server/src/server.ts`)

```
PORT=xxxx
PORT_MOBILE=xxxx
NODE_ENV=development
CORS_ORIGIN=xxxxxx
PG_DATABASE=xxxxxx
PG_HOST=xxxxxx
PG_PORT=xxxxxx
PG_PASSWORD=xxxxxx
PG_USER=xxxxxx
SESSION_SECRET=xxxxxx
COOKIE_NAME=xxxxxx
JWT_SECRET=xxxxxx
JWT_EXPIRES_IN=xxxxxx
REDIS_PORT=xxxxxx
REDIS_URL=xxxxxx
```
