# B&BDB

#### A guide to Irish B&B's using Ember. A project for Epicodus, 8/26/2016

#### By Charlie Baxter

## Description
Inspired by sites like TripAdvisor and my own visit to Ireland, this site is a repository for reviews of Irish bed and breakfasts.  The site displays B&Bs which can then be rated.  By default, the main index page displays B&B's sorted by their average score, which is a computed property taken from the scores of all reviews submitted for that B&B. Each B&B has a one-to-many relation with its reviews via Firebase.

## Setup
* Clone this repository.
* If you do not have Node installed, visit http://nodejs.org/ and select the appropriate installer for your operating system.
* If you do not have Bower installed, either visit http://bower.io/ or type in `npm install bower -g` (if you have have the Node Package Manager installed)
* If you don't already have the Ember CLI installed, it can be installed once Node has been installed by entering `npm install -g ember-cli` (visit http://emberjs.com for additional info about Ember)
* The Node Package manager will allow you to install this project's dependencies.  Use your terminal or shell and enter the command `npm install`
* Install this project's Bower dependencies by entering the command `bower install`
* Start the development server by typing `ember server`
* View the app at [http://localhost:4200](http://localhost:4200) in your web browser.
* When finished, type Ctrl-C in your console or shell.

## Technologies Used

* EmberJS
* Javascript
* Firebase
* Handlebars
* HTML
* CSS
* Bootstrap v4.0 Alpha3
* Node.js
* Bower

## Known Bugs
None currently.

## Features to Add
* Basic search functions
* Pagination (particularly on the browse page)
* Meaningful administrative functions based on privileges
* Sorting by county
* Integration with Google Maps API
* Clean up styling; particularly, make the B&B display cards have consistent dimensions

## Contact & Support
If you run into any issues with this page, have any questions, ideas, or concerns, feel free to email me at charlie.r.baxter@gmail.com.

## Legal
Copyright (c) 2016 Charlie Baxter.  This software is licensed under the MIT License.
