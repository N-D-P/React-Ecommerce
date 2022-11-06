const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const ProductRouter = require("./routes/product");
const OrderRouter = require("./routes/order");
const CartRouter = require("./routes/cart");
const PaymentRouter = require("./routes/stripe");
const cors = require("cors");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected Successfully"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());

app.use("/api/users",UserRouter);
app.use("/api/auth",AuthRouter);
app.use("/api/products",ProductRouter);
app.use("/api/orders",OrderRouter);
app.use("/api/cart",CartRouter);
app.use("/api/payment", PaymentRouter);





app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server running on port ${process.env.PORT}`);
});




