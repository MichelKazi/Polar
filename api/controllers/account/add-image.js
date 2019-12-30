module.exports = {

  friendlyName: 'Add image',

  description: '',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true
    },
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

    return await User.updateOne({ email: inputs.email })
			.set(values);
    // All done.

  }

};
