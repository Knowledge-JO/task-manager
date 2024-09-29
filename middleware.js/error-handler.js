import { CustomAPIError } from "../errors/custom-error.js"

function errorHandlerMiddleware(err, req, res, next) {
	if (err instanceof CustomAPIError) {
		return res.status(err.status).json({ msg: err.message })
	}
	return res.status(500).json({ msg: err.message })
}

export default errorHandlerMiddleware
