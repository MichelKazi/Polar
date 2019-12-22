// api/models/Users.js


module.exports = {
  attributes: {
		id: { type: 'int', required: 'true'  },
		email: { type: 'string', requred: 'true'  },
		password: { type: 'string', required: 'true'  }
  },
};
