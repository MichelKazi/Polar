const stdlib = require('sails-stdlib');
const R = require('ramda');
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
    rememberMe: { type: 'boolean' }
  },

  exits: {
    success: {  },
    badCombo: { responseType: 'unauthorized' }
  },

  fn: async function(inputs, req, res){
    const userRecord = await User.findOne({
      email: inputs.email.toLowerCase()
    });
    if(!userRecord) {
      throw 'badCombo';
    }

    if (inputs.password!== userRecord.password){
      throw 'badCombo';
    }
    //    await stdlib( 'passwords' ).checkPassword(inputs.password, userRecord.password)
    //		.intercept('incorrect', 'badCombo');

    this.req.session.userId = userRecord.id;
    this.req.session.userRecord = R.omit(['password'], userRecord);
    this.res.send(R.omit(['password'], userRecord));

  }

};

