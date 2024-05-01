import sqlite3 from "sqlite3";
import { open } from "sqlite";

/*

  Følgende opretter en forbindelse til filen (/databasen).
  Hvis den ikke findes, så opretter den det.

  node ./database/connection.js
  node ./database/setupDatabase.js

*/

const connection = await open({
  filename: "volcanoes.db",
  driver: sqlite3.Database,
});

export default connection;