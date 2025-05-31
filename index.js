import express from "express";
import dotenv from "dotenv";
import Restrouter from "./Rest.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use("/api", Restrouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});