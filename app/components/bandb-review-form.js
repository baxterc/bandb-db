import Ember from 'ember';

export default Ember.Component.extend({
  showReviewForm: false,
  score: 0,
  actions: {
    addReview(){
      this.set('showReviewForm', true);
    },
    scoreToggled(score){
      this.set('score', score);
    },
    reviewCreate() {
      var params = {
        author: this.get('review-author'),
        content: this.get ('review-content'),
        score: parseInt(this.get('score')),
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
