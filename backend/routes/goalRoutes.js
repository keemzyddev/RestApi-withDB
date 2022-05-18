const express = require('express')
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controller/goalController')

const protect = require('../middleware/authMiddleware')

const router = express.Router();

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)


// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', UpdateGoals)
// router.delete('/', deleteGoals)

module.exports = router