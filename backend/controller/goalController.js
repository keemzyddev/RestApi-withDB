const Goal = require('../models/goalModel')
const asyncHandler = require('express-async-handler')
//get goals
//route  set api//goal
//access private
const getGoals = asyncHandler( async(req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

//set goals
//route  POST api//goal
//access private
const setGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
        }
        const goal = await Goal.create({
            text: req.body.text
        })
        res.status(200).json(goal)
})

//update goals
//route  PUT api//goal/:id
//access private
const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
    req.body, {
        new: true

    })

    res.status(200).json(updatedGoal)
})

//delete goals
//route  DELETE api//goal/:id
//access private
const deleteGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    
    await Goal.remove()


    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}