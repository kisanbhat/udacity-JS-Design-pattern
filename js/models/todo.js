/*global Backbone */
// the next line means if app exists don't do anything
// if app does not exist set app equal to  new empty object {}
var app = app || {};
//below is the modular pattern stating with an IIFE function does not have a name is an
//annoymous function which means any variables we decalre inside 
//the function don't pollute the global scope
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	}); //end of Backbone.Model.extend
})();
// (function () {})() () we run the function immediatly
