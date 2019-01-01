import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
	'users.create': function (userFields) {
		// body...
		Accounts.createUser(userFields);
		console.log('User '+userFields.username+' was created.');

		return 'User \''+userFields.username+'\' created in DB'; 
	},
	'users.remove':function (username) {
		// body...
		Meteor.users.remove({username: username});
		console.log('User '+username+' was deleted.');

	},
});

// add custom field to user created
Accounts.onCreateUser((options, user) => {
	
	console.log('options => ',options);
	console.log('user => ',user);

  const customizedUser = Object.assign(user,{
    type: options.type,
  });

  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile;
  }

  return customizedUser;
});

Meteor.publish('allUsers',function () {
	return Meteor.users.find({},{fields:{username:1,type:1}});
})