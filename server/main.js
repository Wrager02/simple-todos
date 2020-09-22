import {Meteor} from 'meteor/meteor';
import '../imports/api/collections.js';

import {FeaturedGifs} from '../imports/api/collections.js';
import {Results} from '../imports/api/collections.js';

const API_KEY = "HOcHhKX7ueIn6M6ChfIAz4ntvtgEUCem";
let searchQuery;

Meteor.startup(() => {
    FeaturedGifs.remove({})
    HTTP.get("http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY + "&limit=3", {}, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            for (let i = 0; i < response.data.data.length; i++) {
                FeaturedGifs.insert({url: response.data.data[i].images.original.url});
            }
        }
    });

});

Meteor.methods({
        search(searchQuery) {
            Results.remove({});
            HTTP.get("http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=" + API_KEY + "&limit=3", {}, function (error, response) {
                if (error) {
                    console.log(error);
                } else {
                    for (let i = 0; i < response.data.data.length; i++) {
                        Results.insert({url: response.data.data[i].images.original.url});
                    }
                }
            });
        }
    }
);


let search = () => {
}
