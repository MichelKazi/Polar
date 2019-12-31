// api/models/User.js
const dateFns = require('date-fns');


module.exports = {
  attributes: {
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
    fullName: {
      type: 'string',
      required: true
    },
    dob: {
      type: 'string',
      required: true,
      custom: (value)=> {
        return dateFns.differenceInYears(
					new Date(), new Date(value)
        ) >= 18;
      }
    },
    age: {
      type: 'number',
    },
    image1:{
      // required: true,
      type: 'string',
      isURL: true
    },
    gender:{
      type: 'string',
      required: true,
      isIn: ['male', 'female', 'non-binary']
    },
    preference:{
      defaultsTo: 'doesn\'t maatter',
      type: 'string',
      isIn: ['men', 'women', 'non-binary', 'doesn\'t matter']
    },
    location:{
      type: 'json',
    }
  },
};
