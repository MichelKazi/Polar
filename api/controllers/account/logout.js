module.exports = {


  friendlyName: 'Logout',


  description: 'Logout account.',


  exits: {

    success: {
    },

    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function () {

    delete this.req.session.userId;

    if (!this.req.wantsJSON) {
      throw {redirect: '/login'};
    }

  }


};
