module.exports = {


  friendlyName: 'Update bio',


  description: '',


  inputs: {
    bio: {
      type: 'string',
      maxLength: 160,
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    const newBio = await sails.models.bios.create({
      content: inputs.bio

    }).fetch();

    sails.log(`from updatebio ${this.req.user.id}`);

    await User.addToCollection(await this.req.user.id, 'bios')
			.members([await newBio.id]);
    // All done.

    this.res.send(newBio.content);

  }


};
