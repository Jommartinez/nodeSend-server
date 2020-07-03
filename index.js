const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

//create server
const app = express()

//connect DB
connectDB()

// Habilitar Cors
const opcionesCors = {
	origin: process.env.FRONTEND_URL,
}
app.use(cors(opcionesCors))

//port app
const port = process.env.PORT || 4000

//add read body value
app.use(express.json())

//routes
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/enlaces', require('./routes/enlaces'))
app.use('/api/archivos', require('./routes/archivos'))

//start app
app.listen(port, '0.0.0.0', () => {
	console.log(`The server is working in the port ${port}`)
})
