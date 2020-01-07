module.exports = {


  friendlyName: 'Like user',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    await User.addToCollection(this.req.user.id, 'likes')
			.members([inputs.id]);


    const likedUser = await User.findOne({id: inputs.id}).populate('likes');


    if (likedUser.likes.some(obj=> obj.id===this.req.user.id ))
    {
      await User.addToCollection(this.req.user.id, 'matches')
			.members([likedUser.id]);

      await User.addToCollection(likedUser.id, 'matches')
				.members([this.req.user.id]);
    }

    // All done.
    return;

  }


};
