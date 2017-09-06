/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config');

mongoose.connect("mongodb://admin:susannec@ds127034.mlab.com:27034/ufdirectoryapp")

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
  Listing.findOne({
    name: "Library West"
  }, function(err, response) {
    if (err) throw err;

    console.log(response);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
  Listing.findOneAndRemove({
    code: "CABL"
  }, function(err, response) {
    if (err) throw err;

    //log that doc to the console - SHOULDNT I DO THIS BEFORE DELETING??????????????????????????????????????
    console.log("Successfully removed CABL");
  });
};


var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
  Listing.findOneAndUpdate({
    name: "Phelps Laboratory"
  }, {
    address: "Phelps Laboratory, Gainesville, FL 32608"
  }, function(err, response) {
    if (err) throw err;

    //log to console
    console.log(response);

  });
};


var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
  Listing.find({}, function(err, responses) {
    if (err) throw err;

    //print out all responses to the console
    console.log(responses);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
