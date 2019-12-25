// api/models/Users.js
dateFns = require('date-fns')


module.exports = {
  attributes: {
		id: { type: 'integer',required: true,  autoIncrement: true  },
		email: {
			type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'name@example.com'
		},
		password: {
			type: 'string',
			required: true,
			protect: true
		},
		dob: {
			type: 'string',
			required: true,
			custom: (value)=>{
				return dateFns.differenceInYears(
					new Date(), new Date(value)
				) >= 18
			} 
		},
		location: {
			// need to find a way to store user's geolocation here
			
		}
  },
};
