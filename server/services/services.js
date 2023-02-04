const jwt = require("jwt-simple");
let moment = require("moment");
require("dotenv").config();

exports.createToken = function (user) {
  let payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };

  return jwt.encode(payload, process.env.SECRET_TOKEN)
};
