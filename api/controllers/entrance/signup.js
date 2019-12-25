module.exports = {


  friendlyName: 'Signup',


  description: 'Signup entrance.',


  inputs: {
		email: {
			type: 'string',
			required: true,
			isEmail: true
		},
		password: {
			type: 'string',
			required: true,
			maxLength: 200
		}
		fullName: {
			required: true,
			type: 'string',
			maxLength: 200
		}
		dob: {
			required: true,
			type:
		}
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
