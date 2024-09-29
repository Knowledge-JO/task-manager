import mongoose from "mongoose"

async function connectDB(url) {
	return await mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
}

export { connectDB }
