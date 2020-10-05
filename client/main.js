import '../imports/ui/body.js';

const getUserLanguage = function () {
    // Put here the logic for determining the user language

    return "de";
};

if (Meteor.isClient) {
    Meteor.startup(function () {

        TAPi18n.setLanguage(getUserLanguage());
    });
}