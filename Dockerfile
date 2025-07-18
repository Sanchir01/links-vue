FROM node:24-alpine3.21 AS builder

WORKDIR app

COPY package.json  ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm@latest-10

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

CMD ["pnpm","preview"]