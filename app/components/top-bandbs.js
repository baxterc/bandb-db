import Ember from 'ember';

export default Ember.Component.extend({
  sortedBandbs: Ember.computed.sort('bandbs', 'sortDefinition'),
  sortDefinition: ['averageScore:desc'],
});
