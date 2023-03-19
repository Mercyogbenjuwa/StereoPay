## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation

```bash
$ npm install

$ npm i -g @nestjs/cli

$ cd project-name

$ nest new project-name

```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# MIGRATIONS

## Creating Migrations

Migrations are created in the src/migrations folder. Run the command below
`npx typeorm migration:create ./src/db/migration/createMediaTable`

# running migrations

To run migrations, Run the following commands

1. `yarn typeorm migration:run -d ormconfig.ts`

For more information about typeorm nest-js migration, see
https://anjith-p.medium.com/typeorm-database-migrations-in-nestjs-apps-ace923edf1bf
