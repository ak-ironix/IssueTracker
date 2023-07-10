const express = require('express')
const router = express.Router()
const { createIssue, getIssues, updateIssue } = require('../controllers/issues')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware, getIssues)

router.post('/', authMiddleware, createIssue)

router.put('/:id', authMiddleware, updateIssue)

module.exports = router