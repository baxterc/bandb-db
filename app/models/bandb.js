import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  website: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),

  averageScore: Ember.computed('this.reviews.@each.score', function() {
    var runningScore = 0;
    this.get('reviews').forEach(function(review){
      runningScore += parseInt(review.get('score'));
    })
    return runningScore / this.get('reviews').get('length');
  }),
});
