import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(4000, () => console.log("Listening on port 4000"));
