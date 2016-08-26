import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  website: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
