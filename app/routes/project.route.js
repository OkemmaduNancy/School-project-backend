const project = require('../controllers/project.controller.js');

const router = require('express').Router()

router.post('/discover', project.discover);
router.post('/fan', project.fan);
router.post('/television', project.television);
router.post('/freezer', project.freezer);
router.post('/bulb', project.bulb);
router.get('/all', project.findAllProject);

module.exports = router