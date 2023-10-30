const jwt = require("jsonwebtoken");
const models = require("../models");
const Joi = require("joi");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, "PETCOMMERCE", {
    expiresIn: "1d",
  });
};

const register = async (req, res) => {
  const schema = Joi.object({
    nama: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    alamat: Joi.string().required(),
    nomor_telepon: Joi.string().required(),
    role: Joi.string().valid("customer", "seller").required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { nama, email, password, alamat, nomor_telepon, role } = req.body;

  try {
    // Dapatkan ID tertinggi dari tabel User
    const highestUser = await models.User.findOne({
      attributes: [
        [models.sequelize.fn("max", models.sequelize.col("user_id")), "max_id"],
      ],
    });

    let nextId = 1;

    if (highestUser && highestUser.dataValues.max_id) {
      nextId = parseInt(highestUser.dataValues.max_id) + 1;
    }

    const user = await models.User.create({
      user_id: nextId.toString(),
      nama,
      email,
      password,
      alamat,
      nomor_telepon,
      token: null,
      role,
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba mendaftar.");
  }
};

const login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { email, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { email, password } });

    if (user) {
      const token = generateToken(user);
      user.token = token;
      await user.save();
      res.json({ token, message: "Login berhasil", role: user.role }); // Sertakan role dalam respons
    } else {
      res.status(401).send("Email atau kata sandi salah");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba melakukan login.");
  }
};

const logout = async (req, res) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { user_id } = req.body;

  try {
    const user = await models.User.findOne({ where: { user_id } });

    if (user) {
      if (user.token) {
        user.token = null;
        await user.save();
        res.send("Berhasil logout");
      } else {
        res.status(401).send("Pengguna belum login");
      }
    } else {
      res.status(404).send("Pengguna tidak ditemukan");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba logout.");
  }
};

module.exports = {
  register,
  login,
  logout,
};
