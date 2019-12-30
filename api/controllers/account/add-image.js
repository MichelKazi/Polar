module.exports = {

  friendlyName: 'Add image',

  description: '',


  inputs: {
    url:{
      type: 'string',
      isURL: true
    }
  },


  exits: {


  },


  fn: async function (inputs) {

    const values = {
      image1: inputs.url
    };

    await User.updateOne({id: this.req.session.UserId})
			.set(values);
    // All done.
    return;

  }

};
