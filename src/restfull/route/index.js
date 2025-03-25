import express from "express";
const router = express.Router();
import authRoute from "./auth.route.js";
import userRoute from "./user.route.js";

router.use("/auth", authRoute);
router.use("/user", userRoute);
// ('/user/:id);
// ('/users);
//
export default router;