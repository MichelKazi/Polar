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


    return await User.updateOne({ id: await this.req.user.id })
    .set(values);


  }

};
