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
    const loggedInUser = await User.findOne({id: this.req.session.userId});


    const profilesToRender = await User.find({
      where: {

        location: {
          // check if User's location within specified range
        },
        gender: {
          // >=minimum <=maximum
        },
        age: {
          // user's preferred age range
        }

      }
    });



    // All done.

  }


};
