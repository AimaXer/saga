// import jwt from 'jsonwebtoken'
import { GetUserData } from '../../sql_functions/statements/auth.js'
import { GetUserBy } from '../../sql_functions/statements/select.js'
import { BuildSelectStatement } from '../../sql_functions/statements/statement.js'
import { AuthenticateToken } from '../auth/middleware.js'

export const Profile = (app) => {
	app.post('/profile', AuthenticateToken, (req, res) => {
		const uid = req.body.uid
		const handleUserData = async (user) => {
			if (user) {
				res.status(200).send({ data: { ...user, password: '' } })
			} else {
				res.status(400).send({ data: {} })
			}
		}
		GetUserData(BuildSelectStatement(GetUserBy, 'userId = \'' + uid + '\''), handleUserData)
	})
}