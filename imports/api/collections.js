import { Mongo } from 'meteor/mongo';

export const FeaturedGifs = new Mongo.Collection('featuredGifs');
export const Results = new Mongo.Collection('results');