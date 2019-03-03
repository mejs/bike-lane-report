Bike Lane Report automates recording, geolocating and tweeting about vehicles parked in the bike lane.
It runs on a Raspberry Pi Zero W with a GPS shield and PiCamera.

!(https://i.imgur.com/M5vOgrK.png)

A Twitter account is setup with API keys from https://developer.twitter.com/

Included files are:
button.py
tweet.js
config.js (ignored since it includes Twitter API keys)

button.py checks for input on GPIO 24
When button on GPIO 24 is pressed, it takes a photo with PiCamera and saves it to /tmp/tweet.jpg
tweet.js runs, checks gps coordinates using GPS.js library and saves them to variable as Google Maps link
twitter library uploads the image from /tmp/tweet.jpg and adds the Google Maps link.

