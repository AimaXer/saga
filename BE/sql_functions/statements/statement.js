export const BuildInsertStatement = (statement, variables) => {
	let variablesString = ''
	for ( let key in variables ) {
		if (typeof variables[key] === 'string'){
			variablesString = variablesString + '\'' + String(variables[key]) + '\','
		} else {
			variablesString = variablesString + String(variables[key]) + ','
		}
	}
	variablesString = variablesString.slice(0, -1)
	return String(statement + variablesString + ')')
} 

export const BuildSelectStatement = (statement, whereValue) => {
	return String(statement + whereValue)
} 