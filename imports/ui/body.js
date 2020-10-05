import { Template } from 'meteor/templating';

import { FeaturedGifs } from '../api/collections.js';
import { Results } from '../api/collections.js';

import './body.html';

Template.body.helpers({
    featuredGifs() {
        // Show newest tasks at the top
        return FeaturedGifs.find();
    },
    results() {
        // Show newest tasks at the top
        return Results.find();
    }
});

Template.body.events({
    'submit .new-search'(event) {
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;

        Meteor.call("search", text);

        target.text.value = "";
    }
})

