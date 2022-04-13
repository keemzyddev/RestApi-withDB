const asyncHandler = require('express-async-handler')
//get goals
//route  set api//goal
//access private
const getGoals = asyncHandler( async(req, res) => {
    if(!req.body.text){
    res.status(400)
    throw new Error('please add a text field')
    }
    res.status(200).json({msg: 'set goals'})
})

//set goals
//route  POST api//goal
//access private
const setGoals = asyncHandler(async(req, res) => {
    res.status(200).json({msg: 'set goals'})
})

//update goals
//route  PUT api//goal/:id
//access private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({msg: `update goals ${req.params.id}`})
})

//delete goals
//route  DELETE api//goal/:id
//access private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({msg: `delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}