import express from "express";
const router = express.Router();
import authRoute from "./auth.route.js";

router.use("/auth", authRoute);
// ('/user/:id);
// ('/users);
//
export default router;