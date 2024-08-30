const express = require ('express')
const useController = require ('../Controllers/userController')
const router = express.Router()

const verifyToken = require ('../Middleware/VerifyToken')
const checkRole = require('../Middleware/CheckRole')



router.post('/adduser',useController.add)
router.post('/login',useController.login);
// router.get('/protected',verifyToken,useController.protected);
router.get('/protected',verifyToken,checkRole(['user']),  useController.protected)





module.exports = router