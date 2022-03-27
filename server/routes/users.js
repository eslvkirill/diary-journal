require('dotenv');

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const UsersSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UsersSchema);

router.post('/token', async (req, res) =>
  jwt.verify(req.body.token, process.env.SECRET_KEY, (err, data) => (err ? res.send(403) : res.json(data._id)))
);

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    res.json('Такого пользователя не существует. Попробуйте еще раз или создайте новый аккаунт.');
  } else {
    const correctPw = await bcrypt.compare(password, user.password);

    if (!correctPw) {
      res.json('Неверный пароль. Попробуйте еще раз.');
    } else {
      jwt.sign({ _id: user._id }, process.env.SECRET_KEY, (err, token) => {
        res.json({
          token: token,
          user: { _id: user._id },
        });
      });
    }
  }
});

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email: email });

  if (userExist !== null) {
    res.json('Пользователь с таким e-mail уже существует. Попробуйте еще раз.');
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPw = await bcrypt.hash(password, salt);

    const user = new User({
      email: email,
      password: hashPw,
    });

    const newUser = await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    res.json({
      token: token,
      user: { _id: newUser._id, email: newUser.email },
    });
  }
});

module.exports = router;
