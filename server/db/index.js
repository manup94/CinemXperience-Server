const mongoose = require("mongoose");


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://manuel94:cinepremium@cinemxperience.jfgj803.mongodb.net/CinemXperience";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
