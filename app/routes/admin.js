import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    bandbCreate(params) {
      var newBandb = this.store.createRecord('bandb', params);
      newBandb.save();
    }
  }
});
