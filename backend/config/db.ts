const mongoose = require("mongoose");
function connectToDatabase() {
  mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("connected", () => {
    console.log("DB connect successfully");
  });
  db.on("error", (err) => {
    console.log("mongoose failed with", err);
  });
}
module.exports = connectToDatabase;
