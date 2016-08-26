import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  website: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  myList: Ember.inject.service(),

  averageScore: Ember.computed('this.reviews.@each.score', function() {
    var runningScore = 0;
    if (this.get('reviews').get('length') > 0) {
      this.get('reviews').forEach(function(review){
        runningScore += parseInt(review.get('score'));
      })
      return (runningScore / this.get('reviews').get('length')).toFixed(1);
    } else {
      return 0;
    }

  }),

  onMyList: Ember.computed('myList.bandbs.[]', function() {
    return this.get('myList').includes(this);
  })
});
