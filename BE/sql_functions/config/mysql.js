import mysql from 'mysql'
import { DB_R, DB_RW, SQL_USER, SQL_PASSWORD, DB_NAME } from '../../secret.js'

export const MysqlConnection = () => {
	var readCon = mysql.createConnection({
		host: DB_R,
		user: SQL_USER,
		password: SQL_PASSWORD,
		database: DB_NAME
	})
  
	var writeCon = mysql.createConnection({
		host: DB_RW,
		user: SQL_USER,
		password: SQL_PASSWORD,
		database: DB_NAME
	})
	return { readCon, writeCon }
}