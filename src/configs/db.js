const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://Aniket:123@cluster0.cqmzm.mongodb.net/boat?retryWrites=true&w=majority");
};
