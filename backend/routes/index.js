const express = require('express');
const router = express.Router()
const principalController = require('../controllers')

router.get('/', principalController.home);

router.get('/about', principalController.about);

router.get('/history', principalController.history);

router.get('/portfolio', principalController.portfolio);

router.get('/contact', principalController.contact);

router.post('/contact', principalController.contactNodeMailer);

module.exports = router;