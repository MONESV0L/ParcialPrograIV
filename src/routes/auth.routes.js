import {Router} from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controllers"
import {verifysignup} from '../middlewares'
import { checkDuplicatedUsernameOrEmail } from "../middlewares/verifysignup";



router.post("/signup", [verifysignup.checkDuplicatedUsernameOrEmail, verifysignup.checkRolesExisted] ,authCtrl.signUp);

router.post("/signin", authCtrl.signin);


export default router;