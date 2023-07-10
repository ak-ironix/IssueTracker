const { issues } = require('../models')
const jwt = require('jsonwebtoken')

const getIssues = async (req, res, next) => {
    try {
        const allIssues = await issues.findAll()
        res.json(allIssues)

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const createIssue = async (req, res, next) => {
    //the data for the new issue will be taken using a form so figure out how to get that data in req
    // right now just using a json post
    try {
        const issue = req.body
        await issues.create(issue)
        return res.json(issue)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const updateIssue = async (req, res, next) => {
    const id = req.params.id;
    try {
        await issues.update(
            { title: req.body.title, status: req.body.status },
            { where: { id: id } }
        )
    } catch (error) {
        return res.send(400).json({ message: "invalid request" })
    }
    return res.json({ message: "Inserted succesfully" })
}

module.exports = {
    createIssue,
    getIssues,
    updateIssue
}