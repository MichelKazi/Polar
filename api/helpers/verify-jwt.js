const jwt = require('jsonwebtoken');
const R = require('ramda');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {


  friendlyName: 'Verify jwt',


  description: 'verify a JWT Web Token',


  inputs: {
    req: {
      type: 'ref',
      friendlyName: 'Request',
      description: 'A reference to the request object',
      required: true
    },
    res: {
      type: 'ref',
      friendlyName: 'Response',
      description: 'A reference to the response object',
      required: false
    }
  },


  exits: {
    invalid: {
      description: 'Token is invalid or authentication is not present',
    },

  },


  fn: async function (inputs, exits) {

    const req = inputs.req;
    const res = inputs.res;

    if (req.header('authorization')){ //check if authorization header exists and attempt to get data
      const token = req.header('authorization').split('Bearer ')[1];
      sails.log(`token from verify-jwt ${token}`);

      // Ensure token exists otherwise exit
      if (!token) {return exits.invalid();}

      return jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err || !payload.sub) {return exits.invalid();}

        const user = await User.findOne(payload.sub);

        if (!user) {return exits.invalid();}

        req.user = R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], user);


        return exits.success(user);
      });
    }
    return exits.invalid();
  }


};

