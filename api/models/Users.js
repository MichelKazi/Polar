// api/models/Users.js


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
		}
  },
};
