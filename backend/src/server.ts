import express from "express";
import cors from "cors";
import morgan from "morgan";
import { stripeCheckout } from "./handlers/stripe";
import { createNewUser, signin } from "./handlers/user";
import { displayDiscount } from "./handlers/discount";
import { protect } from "./modules/auth";

const app = express();
const apiRouter = express.Router();

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

apiRouter.post("/checkout", stripeCheckout);
apiRouter.post("/user", createNewUser);
apiRouter.post("/signin", signin);

apiRouter.use("/discount", protect, displayDiscount);

//check later
app.use((err, req, res, next) => {
  if (err.meta?.target === "User_email_key") {
    res.status(406).json({ messgae: "email already registered" });
  } else if (res.json.message === "not valid password") {
    res.status(401).json({ message: "not valid password" });
  } else if (res.json.message === "user not found") {
    res.status(400).json({ message: "user not found" });
  } else if (err.type === "auth") {
    res.satus(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    console.log(err);
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "oops, that's on us" });
  }
});

export default app;
