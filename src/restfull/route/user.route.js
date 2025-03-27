import express from "express";
import userController from "../controller/user.controller.js";
const router = express.Router();
import isAuthenticated from "../../middlewares/index.js";

router.get("/me", isAuthenticated, userController.getMe);
router.put("/me", isAuthenticated, userController.updateMe);

export default router;