const mongoose = require('mongoose')
require('dotenv').config({ path: 'vars.env' })

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		})
		console.log('Successful DB connection')
	} catch (error) {
		console.log('Error:')
		console.log(error)
		process.exit(1)
	}
}

module.exports = connectDB
