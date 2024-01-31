// const dotenv = require("dotenv");
// dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { stripeCheckout } from "./handlers/stripe";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/checkout", stripeCheckout);

app.post("/user", createNewUser);
app.post("/signin", signin);

//check later
app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.satus(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    console.log(err);
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "oops, that's on us" });
  }
});

export default app;
