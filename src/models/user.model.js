const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema(
  {
   
    
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



userSchema.pre("save",function(next){

 if(!this.isModified("password")) return next()

 var hash = bcrypt.hashSync(this.password, 8);
 this.password=hash
 return next()
})

userSchema.methods.checkPassword = function (password){
  return bcrypt.compareSync(password, this.password); 
}
userSchema.pre("save",function(next){
  if(!this.isModified("password")) return next()
 
  var hash = bcrypt.hashSync(this.confirm_password, 8);
  this.confirm_password=hash
  return next()
 })
 
 

const User = mongoose.model("user", userSchema); // user => users
module.exports = User;
  