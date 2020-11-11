# empirecode-test

Login &amp; Logout system

## endpoint

- `POST /signup`\
  Request:

```json
{
  "email": "string",
  "fullname": "string",
  "password": "string"
}
```

- `POST /login`\
  Request:

```json
{
  "email": "string",
  "password": "string"
}
```

- `GET /validate`\
  Request:
- headers:
  - token: string

## Server

cd server\
npm install\
fill .env file\
npm run migrate\
npm run dev

## Client

cd client\
npm install\
npm start
