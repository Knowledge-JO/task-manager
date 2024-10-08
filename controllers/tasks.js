import { throwCustomError } from "../errors/custom-error.js"
import asyncWrapper from "../middleware.js/async.js"
import Task from "../models/Task.js"

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({})
	res.status(200).json({ tasks })
})

const getTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params
	const task = await Task.findOne({ _id: taskId })

	if (!task) {
		throwCustomError(`No task with Id: ${taskId}`, 404)
	}
	res.status(200).json({ task })
})

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body)
	res.status(201).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params
	const task = await Task.findOneAndDelete({ _id: taskId })
	if (!task) {
		throwCustomError(`No task with Id: ${taskId}`, 404)
	}

	res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params
	const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
		new: true,
		runValidators: true,
	})

	if (!task) {
		throwCustomError(`No task with Id: ${taskId}`, 404)
	}

	res.status(200).json({ task })
})

export { getAllTasks, getTask, createTask, updateTask, deleteTask }
