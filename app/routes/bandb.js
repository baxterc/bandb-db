import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bandb', params.bandb_id);
  },
  actions: {
    reviewCreate(params) {
      var newReview = this.store.createRecord('review', params);
      var bandb = params.bandb;
      bandb.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return bandb.save();
      });
    },

    deleteReview(review) {
      review.destroyRecord();
    },

  }
});
