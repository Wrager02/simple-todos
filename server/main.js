import { Meteor } from 'meteor/meteor';
import '../imports/api/collections.js';

import { FeaturedGifs } from '../imports/api/collections.js';

const API_KEY = "HOcHhKX7ueIn6M6ChfIAz4ntvtgEUCem";

Meteor.startup(() => {
  // code to run on server at startup

    HTTP.get("http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY + "&limit=3", {}, function( error, response ) {
        if ( error ) {
            console.log( error );
        } else {
            for (let i = 0; i < response.data.data.length; i++) {
                FeaturedGifs.insert({url: response.data.data[i].images.original.url});
            }
        }
    });
});

// let search = () => {
//     HTTP.get("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + API_KEY + "&limit=5", {}, function( error, response ) {
//
//         if ( error ) {
//             console.log( error );
//         } else {
//             console.log( response );
//         }
//     });
// }
