module.exports = {

	friendlyName: 'Log in',
	description: 'Log a user in'

	inputs: {
		email: { type: 'string', isEmail: 'true', required: 'true' },
		password: { type: 'string', required: 'true' },
		rememberMe: { type: 'boolean' }
	}
	
	exits: {
		success: {  },
		badCombo: { responseType: 'unauthorized' }
	}

	fn: async (inputs) =>{
		var userRecord = await User.findOne({
			email: inputs.email.toLowerCase()
		})
		if(!userRecord) {
			throw 'badCombo'
		}

		await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password)
		.intercept('incorrect', 'badCombo')

		this.req.session.userId = userRecord.id
	}
	
}

