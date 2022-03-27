require('dotenv').config({ path: require('path').resolve('config.env') });

const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const itemsRoute = require('./routes/items.js');
const usersRoute = require('./routes/users.js');

const app = express();

app.use(express.json());

app.use('/api/items', itemsRoute);
app.use('/api/users', usersRoute);

app.get('/api', (req, res) => res.send('Diary Journal Server'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('Connected to database.')
);

app.listen(port, () => console.log(`Server started on port ${port}`));
