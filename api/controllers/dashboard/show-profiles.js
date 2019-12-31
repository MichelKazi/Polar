const geolib = require('geolib');
module.exports = {


  friendlyName: 'Show profiles',


  description: '',


  inputs: {
    userEmail: {
      isRequired: true,
      type: 'string',

    }
  },


  exits: {

  },


  fn: async function (inputs) {
    //const loggedInUser = await User.findOne({email: inputs.email});
    const loggedInUser = await this.req.session.userRecord;


    const profilesToRender = await User.find({
      where: {
        location: {
          '<=': geolib,

        }
      }
    });



    // All done.

  }


};
