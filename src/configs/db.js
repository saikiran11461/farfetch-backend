const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://Aniket:123@cluster0.w9frt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
