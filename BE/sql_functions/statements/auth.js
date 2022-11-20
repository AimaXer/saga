import { MysqlConnection } from '../config/mysql.js'

export const RegisterUser = (statement) => {
	const { writeCon } = MysqlConnection()
	writeCon.connect(function(err) {
		if (err) throw err
		writeCon.query(statement, function (err, result) {
			if (err) throw err
			if (result.affectedRows == 0) {
				// TODO
			}
		})
	})
}

export const GetUserData = (statement, handleUserData) => {
	const { readCon } = MysqlConnection()
	readCon.connect((err) => {
		if (err) throw err
		readCon.query(statement, (err, result) => {
			if (err) throw err
			handleUserData(result[0])
		})
	})
}