import db from "./connection.js"

const result = await db.types.insertOne({name: "Ice Cream Sandwhich"});

console.log(result);