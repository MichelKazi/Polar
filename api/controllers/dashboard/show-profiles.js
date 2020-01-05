const R = require('ramda');
const geolib = require('geolib');
module.exports = {


  friendlyName: 'Show profiles',


  description: 'Show profiles to the User',

  exits: {

  },


  fn: async function () {
    sails.log(this.req.user);

    const potentialMatches = await User.find({
      where: {
        age: { '>=': this.req.user.agePreference  },
        id: { '!=': this.req.user.id },
        gender: { in: this.req.user.preference!=='doesn\'t matter' ? [ this.req.user.preference ] : ['male', 'female', 'non-binary']},
        // location: { compare user's location to profilesToRender location somehow }
      },
      sort: 'updatedAt DESC'
    });

    const profilesToSend = potentialMatches.map(profile => {
      return R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], profile);
    });

    this.res.send(profilesToSend);


    // All done.

  }


};
