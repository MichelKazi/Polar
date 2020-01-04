const R = require('ramda');
const geolib = require('geolib');
module.exports = {


  friendlyName: 'Show profiles',


  description: '',

  exits: {

  },


  fn: async function (inputs) {
    sails.log(this.req.user);

    const profilesToRender = await User.find({
      where: {
        age: { '>=': this.req.user.agePreference  },
        id: {
          '!=': this.req.user.id
        }
      },
    });

    //const profilesToRender = await User.query(
    //`SELECT * FROM user WHERE age>=$1`, this.req.user.agePreference, (result)=> { return result }
    //);

    const profilesToSend = profilesToRender.map(profile => {
      return R.omit(['password', 'email', 'createdAt', 'updatedAt', 'dob'], profile);
    });

    this.res.send(profilesToSend);


    // All done.

  }


};
