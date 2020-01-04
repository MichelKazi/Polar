const R = require('ramda');
const geolib = require('geolib');
module.exports = {


  friendlyName: 'Show profiles',


  description: '',

  exits: {

  },


  fn: async function (inputs) {
    sails.log(this.req.user);
    const loggedInUser = await User.findOne({
      id: this.req.user.id
      //id: this.req.session.userId
    });


    const profilesToRender = await User.find({
      where: {
        //age: { '>=': loggedInUser.agePreference },
        id: {
          '!=': this.req.user.id
        }
      },
    });

    const profilesToSend = profilesToRender.map(profile => {
      return R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], profile);
    });

    this.res.send(profilesToSend);


    // All done.

  }


};
