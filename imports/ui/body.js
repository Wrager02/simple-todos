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
    },
    date() {
        const event = new Date();

        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        return event.toLocaleDateString(TAPi18n.getLanguage(), options);
    },
    currency() {
        let dollar = 100;

        switch(TAPi18n.getLanguage()) {
            case 'en':
                return dollar + "$";
            case 'de':
                return dollar*0.85 + "€";
        }
    }
});

Template.body.events({
    'submit .new-search'(event) {
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;

        Meteor.call("search", text);

        target.text.value = "";
    },
    'change #language-select'(event) {
        const target = event.target;
        TAPi18n.setLanguage(target.value);
    }
})

