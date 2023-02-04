const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// Here in case DB EXISTS.
// const dbConnection = require("./database/database");

require("dotenv").config();

const app = express();
const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(userRoutes);
app.use(authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
// Here connection to existing DB

// dbConnection();

module.exports = app;
