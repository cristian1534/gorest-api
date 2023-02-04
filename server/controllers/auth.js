const Register = require("../model/register");
const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const services = require("");

exports.register = async (req, res) => {
  try {
    const schemaRegister = {
      name: Joi.string().min(6).max(255).required(),
      email: Joi.string().min(6).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
    };

    const { error } = schemaRegister.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const emailExists = await Register.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.name,
      email: req.email,
      password: hashedPassword,
    });
    const token = await services.createToken(user)
    await user.save();
    return res.status(200).json({ message: "User registered successfully", token });
  } catch (err) {
    return res.status(400).json({ message: "Error when registering User" });
  }
};

exports.login = async(req, res) => {
  try{
    const schemaLogin = {
      email: Joi.string().min(6).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
    };
    const { error } = schemaLogin.validate(req.body)
    if(error){
      return res.status(400).json({error: error.details[0].message})
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: "User not found." });
    const validPassword = await bcrypt.compare( req.body.password, user.password)
    if (!validPassword)
    return res.status(400).json({ error: "User or Password is wrong." });
    const token = services.createToken(user)
    return res.status(200).json({message:"Login Successfully", token})
  }catch (err) {
    return res.status(400).json({ message: "Error when logging User" });
  }
}