import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ACCESS_TOKEN_SECRET } from '../../secret.js'
import { RegisterUser, GetUserData } from '../../sql_functions/statements/auth.js'
import { CreateUser } from '../../sql_functions/statements/insert.js'
import { GetUserBy } from '../../sql_functions/statements/select.js'
import { BuildSelectStatement, BuildInsertStatement } from '../../sql_functions/statements/statement.js'

export const Auth = (app) => {
	app.post('/login', async (req, res) => {
		const email = req.body.email
		const handleUserData = async (user) => {
			if (!user) {
				res.status(401).send({ error: 'User does not exist'})
			}
			try {
				if(await bcrypt.compare(req.body.password, user.password))  {
					const localUser = { name: email }
					const token = jwt.sign(localUser, ACCESS_TOKEN_SECRET)
					res.status(200)
					res.json({ token: token, uid: user.userId })
				} else {
					res.status(401).send({ error: 'Wrong password'})
				}
			} catch {
				res.status(500).send({ error: 'Internal error'})
			}
		}
		GetUserData(BuildSelectStatement(GetUserBy, 'email = \'' + email + '\''), handleUserData)
	})

	app.post('/register', async (req, res) => {
		const handleUserData = async (user) => {
			if (user) {
				res.status(401).send({ error: 'This email already exists'})
			} else {
				try {
					const hashedPassword = await bcrypt.hash(req.body.password, 10)
					RegisterUser(BuildInsertStatement(CreateUser, [new Date().getTime() / 100, req.body.name, req.body.surname, hashedPassword, req.body.email, req.body.subscription, req.body.avatarImage, req.body.folders, req.body.sites]))
					const name = req.body.name
					const user = { name: name }
          
					const token = jwt.sign(user, ACCESS_TOKEN_SECRET)
					res.json({ token: token })
    
				} catch {
					res.status(401).send({ error: 'User not registered'})
				}
			}
		}
		GetUserData(BuildSelectStatement(GetUserBy, 'email = \'' + req.body.email + '\''), handleUserData)
	})

	app.post('/emailExists', async (req, res) => {
		const email = req.body.email
		const handleUserData = async (user) => {
			if (!user) {
				res.status(200).send({ exists: false, name: '' })
			} else {
				res.status(200).send({ exists: true, name: user.name })
			}
		}
		GetUserData(BuildSelectStatement(GetUserBy, 'email = \'' + email + '\''), handleUserData)
	})
}