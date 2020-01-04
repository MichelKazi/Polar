/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // // Set up fake development data (or if we already have some, avast)
	 if (await User.count() > 0) {
		 return;
	 }
  //
	 await User.createEach([
		 { email: 'michel@example.com', password: '12345', fullName: 'Michel Kazi', dob: '1998/10/03', gender: 'male', agePreference: 20},
		 { email: 'melanie@example.com', password: '12345', fullName: 'Melanie Garcia', dob: '2000/02/23', gender: 'male', agePreference: 21},
		 { email: 'james@example.com', password: '12345', fullName: 'Jame Willet', dob: '1988/10/03', gender: 'male', agePreference: 30},
		 { email: 'justin@example.com', password: '12345', fullName: 'Justin Mesina', dob: '1988/01/21', gender: 'male', agePreference: 40},
		 { email: 'brian@example.com', password: '12345', fullName: 'Brian Peguero', dob: '1994/10/03', gender: 'male', agePreference: 18},
		 { email: 'michael@example.com', password: '12345', fullName: 'Michael Law', dob: '1958/10/03', gender: 'male', agePreference: 25},
		 { email: 'josh@example.com', password: '12345', fullName: 'Josh Seyda', dob: '1991/10/03', gender: 'male', agePreference: 22},
		 { email: 'shahid@example.com', password: '12345', fullName: 'Shahid Sarker', dob: '1990/10/03', gender: 'male', agePreference: 30},
	 ]);

};
