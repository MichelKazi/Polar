const AWS = require('aws-sdk');

module.exports = {

  friendlyName: 'Add image',

  description: '',


  inputs: {
    file:{
      type:'ref'
    }
  },


  exits: {

    invalid: {
      description: 'Unsuccessful upload',
    },

  },


  fn: async function (inputs, exits) {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWSAccessKeyId,
      secretAccessKey: process.env.AWSSecretKey
    });

    console.log(this.req.file);

    const file = inputs.file;
    const params = {
      Bucket: process.env.Bucket,
      Key: (`${this.req.user.name}/${file}`)
    };

    s3.putObject(params, (err, data) => {
      if (err) {
        return exits.invalid();
      } else {
        this.res.send(data);
      }
    });

    const values = {
    };


    //return await User.updateOne({ id: await this.req.user.id })
    //.set(values);


  }

};
