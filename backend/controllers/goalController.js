const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ message: "Get all goals ", goals });
});

// @desc    Create new goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    // res.status(400).json({ message: "please add a text field" });
    res.status(400);
    throw new Error("please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text
  })
  res.status(200).json({ message: "Goal created ", goal });
});

// @desc    Update goal by id
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const findGoal = await Goal.findById(req.params.id) 
    if(!findGoal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
  res.status(200).json({ message: `Updated goal: ${req.params.id}`, updatedGoal });
});

// @desc    Delete goal by id
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const findGoal = await Goal.findById(req.params.id) 
    if(!findGoal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await findGoal.deleteOne()

  res.status(200).json({ message: `Deleted goal: ${req.params.id}`, id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
