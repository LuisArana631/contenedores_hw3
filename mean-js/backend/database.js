const mongoose = require('mongoose');

const URI = process.env.DB_CNN;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

console.log({
  URI,
  username,
  password
})


mongoose.connect(URI, {
    user: username,
    pass: password,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin"
  })
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
