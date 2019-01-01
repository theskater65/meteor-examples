import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './users-preview.html';

Template.usersPreview.onCreated(function () {
	// body...
	Meteor.subscribe('allUsers');
})

Template.usersPreview.helpers({
	allUsers: function () {
		return Meteor.users.find({});
	},
});