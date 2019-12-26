const dateFns = require('date-fns');

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
    },
    fullName: {
      required: true,
      type: 'string',
      maxLength: 200
    },
    dob: {
      required: true,
      type: 'string'
    }
  },

  exits: {

    success: {
      description: 'New user account was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },


  fn: async function (inputs) {

    const newEmail = inputs.email.toLowerCase();
    const newUserRecord = await User.create({
      email: newEmail,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      fullName: inputs.fullName,
      dob: inputs.dob,
      age: dateFns.differenceInYears(new Date(), new Date(inputs.dob))
    })
		.fetch();

    this.req.session.userId = newUserRecord.id;
  }
};
