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
		 { email: 'michel@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Michel Kazi', dob: '1998/10/03', gender: 'male', agePreference: 20, age: 21, location: {long: -74.011020, lat: 40.704200}},
		 { email: 'melanie@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Melanie Garcia', dob: '2000/02/23', gender: 'male', agePreference: 21, age: 20, location: {long: -73.972326, lat: 40.679830}},
		 { email: 'james@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Jame Willet', dob: '1988/10/03', gender: 'male', agePreference: 30, age: 31, location: {long: -73.895017, lat: 40.663946}},
		 { email: 'justin@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Justin Mesina', dob: '1988/01/21', gender: 'male', agePreference: 40, age: 31, location: {long: -73.821961, lat: 40.710676}},
		 { email: 'brian@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Brian Peguero', dob: '1994/10/03', gender: 'male', agePreference: 18, age: 26, location: {long: -73.946381, lat: 40.832099}},
		 { email: 'michael@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Michael Law', dob: '1958/10/03', gender: 'male', agePreference: 25, age: 62, location: {long: -74.011020, lat: 40.704200}},
		 { email: 'josh@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Josh Seyda', dob: '1991/10/03', gender: 'male', agePreference: 22, age: 29, location: {long: -74.011020, lat: 40.704200}},
		 { email: 'shahid@example.com', password: await sails.helpers.passwords.hashPassword('12345'), fullName: 'Shahid Sarker', dob: '1990/10/03', gender: 'male', agePreference: 30, age: 30, location: {long: -74.011020, lat: 40.704200}},
	 ]);

};
