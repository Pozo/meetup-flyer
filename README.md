## What is it?

A Meetup flyer generator.

Generate a printable flyer which helps you to promote meetups in your office. It runs locally with the help of nodejs.

## Installation (Ubuntu)

    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm

    npm install http-proxy --save
    npm install node-static --save

    nodejs index.js

## Usage

  - Pick a meetup what you want to promote eg. http://www.meetup.com/Craft-meetup/events/227205590/
  - **Optional**: Grab your API key from https://secure.meetup.com/meetup_api/key/ .
  - Change host to localhost http://localhost:8080/Craft-meetup/events/227205590/
  - **Optional**: If you have to login in order to reach additional information about the meetup, you have to add your key to the url http://localhost:8080/Craft-meetup/events/227205590?key={{YOUR.API.KEY}}
  - **$$** Profit **$$**
  
![Meetup Flyer](https://github.com/Pozo/meetup-flyer/blob/master/flyer.png "Meetup Flyer")

## Licensing

Please see LICENSE file

## Contact

  Zoltan Polgar - pozo@gmx.com
  
  Please do not hesitate to contact me if you have any further questions. 
