const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'variables.env' })

module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization')
	if (authHeader) {
		//obtener token
		const token = authHeader.split(' ')[1]

		//comprobar JWT
		try {
			const usuario = jwt.verify(token, process.env.SECRETA)
			req.usuario = usuario
		} catch (error) {
			console.log('JWT no valido')
			console.log(error)
		}
	}
	return next()
}
