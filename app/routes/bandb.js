import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bandb', params.bandb_id);
  },
});
