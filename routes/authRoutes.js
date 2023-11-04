import Express from "express";
import { loginController, registerController } from "../controllers/authConroller.js";

const router = Express.Router();

//regiter
router.post('/register',registerController);

//login
router.post('/login',loginController);

export default router;