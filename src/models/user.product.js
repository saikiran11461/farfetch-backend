const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const productSchema = new mongoose.Schema(
  {
   
    
    title: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    image_link:{type:String,required:true},
    category:{type:String,required:true},
    
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("product",productSchema)