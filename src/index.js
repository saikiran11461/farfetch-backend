const express = require("express");

const connect = require("./configs/db");

const  {register,login}=require("./controllers/auth.user.controller")
const userController = require("./controllers/user.controller");
// const userProduct = require("./models/user.product");
const productController=require("./controllers/product.controller")


const app = express();

app.use(express.json());
app.post("/register",register)
app.post("/login" ,login)

app.use("/product", productController);

app.use("/users", userController);


const PORT=process.env.PORT || 2345

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
