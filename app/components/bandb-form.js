import Ember from 'ember';

export default Ember.Component.extend({
  price: 0,
  actions: {
    priceSet(price){
      this.set('price', price);
    },
    bandbCreate() {
      var params = {
        name: this.get('bandb-name'),
        price: this.get('bandb-price'),
        location: this.get('bandb-location'),
        website: this.get('bandb-website'),
        description: this.get('bandb-description'),
        image: this.get('bandb-image'),
      };
      this.set('bandb-name', "");
      this.set('bandb-price', "");
      this.set('bandb-location', "");
      this.set('bandb-website', "");
      this.set('bandb-description', "");
      this.set('bandb-image', "");
      this.sendAction('bandbCreate', params);
    },
  }
});
