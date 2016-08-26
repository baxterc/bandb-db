import Ember from 'ember';

export default Ember.Component.extend({
  averageScore: Ember.computed('bandb.reviews.@each.score', function() {
    var runningScore = 0;
    this.get('bandb').get('reviews').forEach(function(review){
      runningScore += parseInt(review.get('score'));
    })
    return runningScore / this.get('bandb').get('reviews').get('length');
  }),
});
