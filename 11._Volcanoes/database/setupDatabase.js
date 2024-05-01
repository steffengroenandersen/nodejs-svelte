import db from "./connection.js";

console.log("RESTARTING DATABASE...");

// console.log(process.argv);

const isDeleteMode = process.argv.includes("delete");

if (isDeleteMode) {
  console.log("DELETING DATABASE...");
  await db.run(`DROP TABLE IF EXISTS volcanoes;`);
  await db.run(`DROP TABLE IF EXISTS villages;`);
}

// DDL
db.exec(`
  CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    is_active BOOLEAN,
    type TEXT CHECK( type IN ('Caldera', 'Underwater', 'Underground', 'Super Volcano'))
  );

`);

db.exec(
  `CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcano_id INTEGER,
    FOREIGN KEY (volcano_id) REFERENCES volcanoes (id)
  );`
);

// DML
// Seeding

if (isDeleteMode) {
  console.log("INITIATE SEEDING...");

  await db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES ('Mount St. Helens', TRUE, 'Caldera')`);
  await db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES ('Krakatoa', TRUE, 'Super Volcano')`);
  await db.run(`INSERT INTO villages (name, volcano_id) VALUES ('Village 1', 1)`);
  await db.run(`INSERT INTO villages (name, volcano_id) VALUES ('Village 2', 2)`);
}

console.log("DATABASE IS READY...");
