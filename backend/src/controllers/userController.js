const jwt = require("jsonwebtoken");
const models = require("../models");
const Joi = require("joi");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, "PETCOMMERCE", { 
    expiresIn: "1d",
  });
};

const register = async (req, res) => {

  // Validate input
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    phone_number: Joi.string().required(),
    role: Joi.string().valid("customer", "seller").required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Get data from request
  const { name, email, password, address, phone_number, role } = req.body;

  try {
    
    const latestUser = await models.User.findOne({
      where: {
        deletedAt: null
      },
      order: [
        ['user_id', 'DESC']  
      ],
      attributes: ['user_id']
    });
    
    let nextId = 1;
    
    if (latestUser) {
      nextId = latestUser.user_id + 1;  
    }

    // Create new user
    const user = await models.User.create({
      user_id: nextId, 
      name,
      email,
      password,
      address,
      phone_number,
      token: null,
      role 
    });

    // Return created user
    res.json(user);
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }

};

const login = async (req, res) => {
  
  // Validate input
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { email, password } = req.body;

  try {

    // Find user by email and password
    const user = await models.User.findOne({ 
      where: { email, password } 
    });

    // If user exists
    if (user) {

      // Generate and save token
      const token = generateToken(user);
      user.token = token;
      await user.save();
      
      // Return token, message and role
      res.json({ 
        token, 
        message: "Login successful",
        role: user.role
      });

    } else {
      res.status(401).send("Invalid email or password");
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }

};

const logout = async (req, res) => {

  // Validate input
  const schema = Joi.object({
    user_id: Joi.number().required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { user_id } = req.body;

  try {

    // Find user by id
    const user = await models.User.findByPk(user_id);

    // If user exists
    if (user) {

      // Clear user token
      if (user.token) {
        user.token = null;
        await user.save();
      } 
      
      // Return response
      res.send("Logged out successfully");

    } else {
      res.status(404).send("User not found");
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging out");
  }

};

module.exports = {
  register,
  login,
  logout
};