const express = require("express");

const connect = require("./src/configs/db");

const  {register,login}=require("./src/controllers/auth.user.controller")
const userController = require("./src/controllers/user.controller");
// const userProduct = require("./models/user.product");
const productController=require("./src/controllers/product.controller")


const app = express();

app.use(express.json());
app.post("/register",register)
app.post("/login" ,login)

app.use("/products", productController);

app.use("/users", userController);
app.set("view engine","hbs")
app.get("/",(req,res)=>{
  res.render("index")
})

const PORT=process.env.PORT || 2345

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
