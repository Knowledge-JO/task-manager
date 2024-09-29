import express from "express"
import tasks from "./routes/tasks.js"
import { connectDB } from "./db/connect.js"
import dotenv from "dotenv"
import notFound from "./middleware.js/not-found.js"
import errorHandlerMiddleware from "./middleware.js/error-handler.js"
dotenv.config()

const mongo_url = process.env.MONGO_URI
const app = express()

const port = process.env.PORT || 3000

//middleware
app.use(express.static("./public"))
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
	res.send({ hello: "hi" })
})

app.use("/api/v1/tasks", tasks)

app.use(notFound)

app.use(errorHandlerMiddleware)

async function start() {
	try {
		await connectDB(mongo_url)
		console.log("Connected to DB...")
		app.listen(port, "localhost", () =>
			console.log("server online on port", port)
		)
	} catch (err) {
		console.log("Error connecting to DB:", err)
	}
}

start()
