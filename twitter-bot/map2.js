//Create Google Maps link
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAwLBDkeZ8jkBajTm0Nh78O1TcdU5mCPUs'
});


googleMapsClient.placesAutoComplete({
	latlng: [40.618110, -73.980872],
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
