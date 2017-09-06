'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

var parsedEntries = undefined;

/* Connect to your database */
//db is inthe config file
mongoose.connect("mongodb://admin:susannec@ds127034.mlab.com:27034/ufdirectoryapp")

fs.readFile('listings.json', 'utf8', function(err, response){
  if(err) throw err;
  parsedEntries = JSON.parse(response).entries;

  parsedEntries.forEach(function(entry){
    //model
    var currentEntry = new Listing(entry);

    //save into mongodb
    currentEntry.save(function(err){

      if(err) throw err;

      //print to console
      console.log(entry.toString + ' was successfully saved');
    });
  });
});


/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
