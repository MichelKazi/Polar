module.exports = {

  friendlyName: 'Log in',
  description: 'Log a user in',

  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true
    },
    password: { type: 'string', required: true },

    rememberMe: { type: 'boolean' },

    location: {
      type: 'json',
      //required: true
    }
  },

  exits: {
    success: {  },
    badCombo: { responseType: 'unauthorized' }
  },

  fn: async function(inputs){
    const userRecord = await User.findOne({
      email: inputs.email.toLowerCase()
    });
    if(!userRecord) {
      throw 'badCombo';
    }

    await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password)
    .intercept('incorrect', 'badCombo');


    const userId = await userRecord.id;
    const values = {
      location: inputs.location
    };
    User.updateOne({ id: await userId })
			.set(values);

    const token = await sails.helpers.assignJwt.with({ userId });

    sails.log(this.req.user);
    this.res.send(await token);
    //this.res.send(await R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], userRecord));
  }

};

