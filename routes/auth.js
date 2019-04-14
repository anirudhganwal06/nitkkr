const express = require('express');

const authController = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

router.post('/:userid/logout', authController.postLogout);

router.get('/change-password', authController.getChangePassword);

router.post('/change-password', authController.postChangePassword);

module.exports = router;