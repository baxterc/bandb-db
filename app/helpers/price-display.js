import Ember from 'ember';

export function priceDisplay(params) {
  var bandb = params[0]
  var priceScore = parseInt(params[0].get('price'));
  var returnString = "";

  for (var i = 0; i < priceScore; i++) {
    returnString += "$";
  };
  return returnString.toString();
}

export default Ember.Helper.helper(priceDisplay);
