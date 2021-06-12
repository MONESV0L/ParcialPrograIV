import {Router} from 'express';
const router = Router();

import * as stateCtrl from '../controllers/states.controllers'
import {authjwt} from '../middlewares'

router.post('/',[authjwt.verifyToken, authjwt.isModerator], stateCtrl.createsState)

router.get('/', stateCtrl.getState)

router.get('/:stateId', stateCtrl.getStateById)

router.put('/:stateId', authjwt.verifyToken, stateCtrl.updateStateById)

router.delete('/:stateId', [authjwt.verifyToken, authjwt.isAdmin],stateCtrl.deleteStateById)

export default router;