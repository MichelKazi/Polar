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
    console.log(this.req.user);


    delete this.req.user;
    console.log(this.req.user);

    if (!this.req.wantsJSON) {
      throw {redirect: '/login'};
    }

  }


};
