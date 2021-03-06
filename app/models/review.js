import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  score: DS.attr(),
  date: DS.attr(),
  bandb: DS.belongsTo('bandb', {async: true})
});
