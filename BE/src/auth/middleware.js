import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../../secret.js'


export const AuthenticateToken = (request, response, next) => {
	const authHeader = request.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return response.status(401).send('User not registered')

	jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return response.status(403).send('User not registered')

		request.user = user
		next()
	})
}