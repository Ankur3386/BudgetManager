import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import RegisterUser from "../controllers/user.controller";
const router =Router()
router.route("/register").post(upload.single('avatar'),RegisterUser )
export default router