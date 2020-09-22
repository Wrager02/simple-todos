import { Template } from 'meteor/templating';

import { FeaturedGifs } from '../api/collections.js';

import './body.html';

Template.body.helpers({
    featuredGifs() {
        // Show newest tasks at the top
        return FeaturedGifs.find({}, {});
    },
});