const express = require('express');

const nitkControllers = require('../controllers/homepage');

const router = express.Router();

router.get('/', nitkControllers.getHomepage);

router.get('/our-development-team', nitkControllers.getOurDevelopmentTeam);

module.exports = router;