const express = require('express');
const router = express.Router();
const {userController,adminController} = require('../controller/userController.js');
const authenticate = require('../middleware/authenticate')

router.post('/api/register',userController.register)
router.post('/api/login',userController.login)

router.get('/api/Home',authenticate,userController.Home)
router.get('/api/about',authenticate,userController.About)
router.get('/api/getuser',authenticate,userController.About)
router.get('/api/logout',userController.About)

// Doctor's data

router.post('/api/add_doctor',adminController.AddDoctor)
router.get('/api/get_doctor',adminController.getDoctor)

router.post('/api/add_appointment',adminController.Appontment_detail)
router.get('/api/get_appointment_detail/:email',adminController.Get_Appointment_detail)

module.exports = router;