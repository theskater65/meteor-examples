import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function () {
	// body...
	if ( Meteor.users.find().count() === 0) {
		userFields = {type: 'SuperDummy', username: 'johnd', email: 'johnd@mail.com', password: 'j0hnd03', profile: {firstname: 'John', lastname: 'Doe'}};
		Accounts.createUser(userFields);
	}
	console.log('users collection has '+Meteor.users.find().count()+' document');
});

// add custom field to user created
/*Accounts.onCreateUser((options, user) => {
	
	console.log('options => ',options);
	console.log('user => ',user);

  const customizedUser = Object.assign(user,{
    type: 'SuperDummy',
  });

  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile;
  }

  return customizedUser;
});*/