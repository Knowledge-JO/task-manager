class CustomAPIError extends Error {
	constructor(message, statusCode) {
		super(message)
		this.status = statusCode
	}
}

function throwCustomError(msg, statusCode) {
	throw new CustomAPIError(msg, statusCode)
}

export { CustomAPIError, throwCustomError }
