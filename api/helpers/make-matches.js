module.exports = {


  friendlyName: 'Make matches',


  description: '',


  inputs: {
    id:{
      type: 'number',
      required: true
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const likedUser = await User.findOne({id: inputs.id});

    if (likedUser.likes.includes(this.req.user.id)) {
      User.addToCollection(this.req.user.id, 'matches')
			.members([likedUser.id]);

      User.addToCollection(likedUser.id, 'matches')
				.members([this.req.user.id]);
    }
  }
};

