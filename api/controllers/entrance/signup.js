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
    },
    gender: {
      required: true,
      type: 'string',
    },
    preference: {
      defaultsTo: 'doesn\'t matter',
      type: 'string'
    },
    agePreference: {
      type: 'number',
      required: true
    },
    location: {
      type: 'json',
      //required: true
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

    const newName = inputs.fullName.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    const newEmail = inputs.email.toLowerCase();
    const newUserRecord = await User.create({
      email: newEmail,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      fullName: newName,
      dob: inputs.dob,
      age: dateFns.differenceInYears(new Date(), new Date(inputs.dob)),
      gender: inputs.gender,
      preference: inputs.preference,
      agePreference: inputs.agePreference
    })
		.fetch();

    // update user's location
    const values = {
      sub: await newUserRecord.id,
      location: inputs.location
    };
    User.updateOne({ id: await newUserRecord.id })
			.set(values);

    // create a JWT token for the newly minted user:w
    const userId = newUserRecord.id;
    const token = await sails.helpers.assignJwt.with({ userId });

    this.res.send(await token);
  }

};
