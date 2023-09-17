const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/UserRoutes");
const { recipeRouter } = require("./Routes/RecipeRoute");

require("dotenv").config();
let app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome Recipe APP");
});
app.use("/", userRouter);
app.use("/", recipeRouter);

console.log(process.env.PORT);
app.listen((process.env.PORT = 3002), async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch (err) {
    console.log("db connection have error");
  }
  console.log(`server is running on port ${process.env.PORT}`);
});
