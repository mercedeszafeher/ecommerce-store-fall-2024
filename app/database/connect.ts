import 'server-only';
import { config } from 'dotenv-safe';
import postgres, { Sql } from 'postgres';

config();

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();
