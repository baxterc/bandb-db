import Ember from 'ember';

export default Ember.Component.extend({
  showReviewForm: false,
  actions: {
    addReview(){
      this.set('showReviewForm', true);
    },
    reviewCreate() {
      var params = {
        author: this.get('review-author'),
        content: this.get ('review-content'),
        score: this.get ('review-score'),
        date: new Date(),
        bandb: this.get('bandb'),
      };
      this.set('review-author', "");
      this.set('review-content', "");
      this.set('review-score', "");
      this.set('showReviewForm', false);
      this.sendAction('reviewCreate', params);
    }
  }
});
