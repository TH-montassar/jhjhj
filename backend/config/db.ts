const mongoose = require("mongoose");
function connectToDatabase() {
  mongoose.connect(process.env.MONGO_DB_URL, {
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
