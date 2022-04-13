const express = require('express')
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controller/goalController')

const router = express.Router();

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals)


// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', UpdateGoals)
// router.delete('/', deleteGoals)

module.exports = router