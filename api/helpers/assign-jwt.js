const jwt = require('jsonwebtoken');
const R = require('ramda');
const dotenv = require('dotenv');
dotenv.config();

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

  fn: async function (inputs, exits) {

    sails.log(`JWT_KEY is ${process.env.JWT_KEY}`);
    if (!inputs) {return exits.invalid();}

    const userRecord = await User.findOne({ id: inputs.userId });
    const user = R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], userRecord);

    const token = jwt.sign(await user, process.env.JWT_KEY);
    return exits.success(token);
  }
};

