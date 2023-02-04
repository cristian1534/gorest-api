const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.post("https://gorest.co.in/public/v1/users", controller.create);
router.get("https://gorest.co.in/public/v1/users", controller.getUsers);
router.get("https://gorest.co.in/public/v1/users/:id", controller.getOneUser);
router.put("https://gorest.co.in/public/v1/users/:id", controller.updateUser);
router.delete("https://gorest.co.in/public/v1/users/:id", controller.deleteUser);


module.exports = router;
