import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './users-preview.js';
import './body.html';

Template.body.events({
	'click button': function (e) {
		// body...
		e.preventDefault();
		console.log('Button pressed!!');
	},
	'click .add': function (e) {
		// body...
		e.preventDefault();
		console.log('Creating User...');

		userFields = {type: 'Developer', username: 'blake', email: 'blake@mail.com', password: '1234qwer', profile: {name: 'Blake Green'}};
   	createUser(userFields);
		
		console.log('New User Created!');
	},
	'click .del': function (e) {
		// body...
		e.preventDefault();
		console.log('Deleting User...');
		username = 'blake';
		Meteor.call('users.remove', username);
		console.log('User Deleted!');
	},
	'submit #add': function (e) {
		// body...
		e.preventDefault();

		console.log('Creating user...');

		userFields = {password: '1234qwer', profile: {name: 'You know who'}};
		
		theformelements = e.target.getElementsByTagName('input');
		for(var i = 0; i < theformelements.length; i++) {
	    if(theformelements[i].type.toLowerCase() == 'text') {
				userFields[theformelements[i].name] = theformelements[i].value;
	    }
		}

		console.log(userFields)
    createUser(userFields);
		console.log('New User Created!');
	},
	'submit #del': function (e) {
		// body...
		e.preventDefault();
		console.log('Deleting User...');
		Meteor.call('users.remove', e.target.getElementsByTagName('input')[0].value);
		console.log('User Deleted!');
	}
});

function createUser(fields) {
	// body...
	Meteor.call('users.create', fields, function (error,result) {
		// body...
		if (result) {
			alert(result)
		}
		if (error) {
			alert(error)
		}
	});
}