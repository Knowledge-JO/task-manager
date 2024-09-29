import Mongoose from "mongoose"

const TaskSchema = new Mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is empty"],
		trim: true,
		maxLength: [200, "Cannot be more than 20 characters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
})

const Task = Mongoose.model("Task", TaskSchema)

export default Task
