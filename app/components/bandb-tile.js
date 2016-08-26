import Ember from 'ember';

export default Ember.Component.extend({
  myList: Ember.inject.service('my-list'),

  actions: {
    addToList(bandb) {
      this.get('myList').add(bandb);
    },
    removeFromList(bandb) {
      this.get('myList').delete(bandb);
    }
  }
});
