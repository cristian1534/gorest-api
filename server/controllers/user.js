const User = require("../model/user");
const Joi = require("@hapi/joi");

exports.create = async (req, res) => {
  try {
    const schemaUser = {
      name: Joi.string().min(6).max(255).required(),
      email: Joi.string().min(6).max(255).required(),
      gender: Joi.string().min(6).max(255).required(),
      status: Joi.string().min(6).max(255).required(),
    };

    const { error } = schemaUser.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { name, email, gender, status } = req.body;

    const user = await new User({ name, email, gender, status });
    user.save();
    return res.status(200).json({ message: "Created Successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Error when creating User" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = User.find();
    if (!user.length) {
      return res.status(400).json({ message: "No Users to show" });
    }
    return res.status(200).json({ message: "List of Users" }, users);
  } catch (err) {
    return res.status(400).json({ message: "Error when fetching Users" });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const user = User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "Not user found" });
    }
    return res.status(200).json({ message: "User found", user });
  } catch (err) {
    return res.status(400).json({ message: "Error when fetching User" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, gender, status } = req.params;
    const user = User.findOneAndUpdate(
      { _id: req.params.id },
      { name, email, gender, status }
    );
    if (!user) {
      return res.status(400).json({ message: "Not User found to Update" });
    }
    return res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    return res.status(400).json({ message: "Error when updating User" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = User.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "Not User found to delete" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Error when deleting User" });
  }
};
