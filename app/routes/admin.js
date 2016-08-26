import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('bandb')
  },
  actions: {
    bandbCreate(params) {
      var newBandb = this.store.createRecord('bandb', params);
      newBandb.save();
    },
    bandbDelete(bandb) {
      var review_deletions = bandb.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return bandb.destroyRecord();
      });
    }
  }
});
