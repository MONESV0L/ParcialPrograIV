import {Router} from 'express'
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import {authjwt, verifysignup} from '../middlewares'

router.post('/', [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifysignup.checkRolesExisted
] , userCtrl.createUser)

export default router;