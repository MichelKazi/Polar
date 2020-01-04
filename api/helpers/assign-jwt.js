const jwt = require('jsonwebtoken');
const R = require('ramda');
module.exports = {


  friendlyName: 'Assign jwt',


  description: 'Assign JSON Web Token to the user',

  inputs: {
    userId: {
      required: true,
      type: 'number',
    }
  },


  exits: {
    invalid: {
      description: 'User not found',
    },
    success: {
      description: 'All done.',
    },

  },


  fn: async function (exits, inputs) {
    if (!inputs.userId) { return exits.invalid(); }

    let userRecord = await User.findOne({ id: await inputs.userId });
    if (!userRecord) { return exits.invalid(); }
    sails.log(userRecord);

    const user = await R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], userRecord);

    const token = jwt.sign(await user, process.env.JWT_KEY);
    return exits.success(token);
  }


};

