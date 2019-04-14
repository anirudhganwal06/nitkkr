const express = require('express');

const usersController = require('../controllers/users');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/student/:userid', isAuth, usersController.getStudentPersonalInfo);

router.get('/student/:userid/marks', isAuth, usersController.getMarksOfStudent);

router.get('/student/:userid/attendance', isAuth, usersController.getAttendanceOfStudent);

router.get('/teacher/:userid', isAuth, usersController.getTeacherPersonalInfo);

router.get('/teacher/:userid/add-attendance', isAuth, usersController.getAddAttendance);

router.post('/teacher/:userid/add-attendance', isAuth, usersController.postAddAttendance);

router.get('/teacher/:userid/add-marks', isAuth, usersController.getAddMarks);

router.post('/teacher/:userid/add-marks', isAuth, usersController.postAddMarks);

router.get('/parent/:userid', isAuth, usersController.getStudentPersonalInfo);

module.exports = router;

