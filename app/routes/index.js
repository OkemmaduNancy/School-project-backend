const router = require('express').Router()

const project = require('./project.route')
router.use('/project', project)

module.exports = router