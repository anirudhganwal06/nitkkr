const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-student', adminController.getAddStudent);

router.post('/add-student', adminController.postAddStudent);

router.get('/add-teacher', adminController.getAddTeacher);

router.post('/add-teacher', adminController.postAddTeacher);

module.exports = router;