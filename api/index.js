const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected Successfully"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/users",UserRouter);
app.use("/api/auth",AuthRouter);



app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server running on port ${process.env.PORT}`);
});




