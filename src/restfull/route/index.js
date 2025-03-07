import express from "express";
const router = express.Router();
import userRoute from "./auth.route.js";

router.use("/auth", userRoute);

export default router;