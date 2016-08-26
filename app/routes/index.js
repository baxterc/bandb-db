import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('bandb', {
      orderBy: 'name',
      limitToLast: 6,
    })
  },
  // sortedBandbs: Ember.computed('model()', function() {
  //   this.get('model').sort(function(a,b){
  //     return(a-b);
  //   })
  // })
});
