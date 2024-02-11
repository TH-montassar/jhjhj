const mongoose = require("mongoose");
function connectToDatabase() {
  /*   const uri =
    "mongodb+srv://montassar:montassar@cluster0.shphf.mongodb.net/socialApp";
  console.log("this is your uri ", uri); */
  const DB = process.env.MONGO_DB_URL;

  console.log("this is your uri ", DB);
  if (!DB) {
    console.error(
      "MongoDB connection string is missing. Make sure MONGO_DB_URL is set."
    );
    return;
  }

  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  // will trigger it only the first time the event occurs, and then it will be automatically removed as a listener
  db.once("open", () => {
    console.log("DB connect successfully");
  });

  //db.on("connected", () => { /on will trigger your event handler every time the event occurs

  db.on("error", (err) => {
    console.log("mongoose failed with", err);
  });
}
module.exports = connectToDatabase;
