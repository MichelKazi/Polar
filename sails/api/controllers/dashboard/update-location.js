module.exports = {


  friendlyName: 'Update location',


  description: '',


  inputs: {
    location: {
      type: 'json',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    const values = {
      location:  inputs.location
    };

    return await User.updateOne({ id: this.req.session.userId })
			.set(values);
  }


};
