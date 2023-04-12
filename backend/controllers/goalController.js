const asyncHandler = require('express-async-handler')

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get all goals " });
});


// @desc    Create new goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler( async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    // res.status(400).json({ message: "please add a text field" });
    res.status(400)
    throw new Error('please add a text field')
  }
  res.status(200).json({ message: "Goal created " });
});


// @desc    Update goal by id
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Updated goal: ${req.params.id}` });
});


// @desc    Delete goal by id
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Deleted goal: ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
