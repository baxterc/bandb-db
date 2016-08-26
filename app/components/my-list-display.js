import Ember from 'ember';

export default Ember.Component.extend({
  myList: Ember.inject.service(),

  actions: {
    removeFromList(bandb) {
      this.get('myList').delete(bandb);
    }
  }
});
