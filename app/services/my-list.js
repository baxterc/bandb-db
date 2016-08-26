import Ember from 'ember';

export default Ember.Service.extend({
  bandbs: [],
  add(bandb) {
    this.get('bandbs').pushObject(bandb);
  },

  delete(bandb) {
    this.get('bandbs').removeObject(bandb);
  },

  includes(bandb) {
    return this.get('bandbs').includes(bandb);
  },
});
