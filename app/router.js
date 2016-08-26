import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bandb', {path: '/bandb/:bandb_id'});
  this.route('browse');
  this.route('add-review');
  this.route('admin');
  this.route('my-list');
});

export default Router;
