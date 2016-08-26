import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bandb');
  this.route('browse');
  this.route('add-review');
});

export default Router;
