// use ice_creams

// db.types.find()

// ice_creams> db.types.insert({name: "Kung-fu", price: 12.00})

// ice_creams> db.types.find({name: "Tricolre", })

// ice_creams> db.types.updateOne({name: "Osvald"}, {$set: {price: 20}})

// Find icecreams wih price greater than 19
// ice_creams> db.types.find({price: {$gt: 19}})

// Greater Than or Equal To (GTE)
// ice_creams> db.types.find({price: {$gte: 19}})

// Assignment: Create a brands collection and train how to do crud

/* 

  ice_creams> db.createCollection("brands")

  ice_creams> db.brands.insert({name: "Bambino", countryOfOrigin: "US"})
  ice_creams> db.brands.insert({name: "HJEMIS", countryOfOrigin: "DK"})

  db.brands.find().count()
  db.brands.find({name: "HJEMIS"}).count()
  

 
*/

// REGEX
`db.brands.find({name: /^HJEM*/i "}).count()`;

/* 
  ice_creams> db.brands.insertOne({name: "Nestle", brands:[], isCancelled: true})
  ice_creams> db.brands.updateOne ({company: "Nestle"} , {$push:{brands:"RedHot"}})

*/
