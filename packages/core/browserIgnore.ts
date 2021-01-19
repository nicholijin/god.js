import builtins from "builtin-modules";

export let ignorePackages = builtins.concat([
  "@databases/mysql",
  "@databases/pg",
  "@databases/sqlite",
  "@prisma/client",
  "@remix-run/data",
  "apollo-server",
  "better-sqlite3",
  "bookshelf",
  "dynamodb",
  "firebase-admin",
  "mariadb",
  "mongoose",
  "mysql",
  "mysql2",
  "pg",
  "pg-hstore",
  "pg-native",
  "pg-pool",
  "postgres",
  "sequelize",
  "sqlite",
  "sqlite3",
  "tedious"
]);
