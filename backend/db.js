const moongose = require("mongoose");
require("dotenv").config();


moongose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

const todoSchema = new moongose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = moongose.model("todos", todoSchema);

module.exports = {
  todo,
};
