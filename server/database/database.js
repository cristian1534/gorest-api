const mongoose = require("mongoose");
const color = require("colors");

mongoose.set("strictQuery", true);

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DBNAME}.8t8b07v.mongodb.net/?retryWrites=true&w=majority`;

function dbConnection() {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(color.yellow("DB connected.")))
    .catch((err) => console.log(color.red("Error to connect: ", err)));
}

module.exports = dbConnection;
