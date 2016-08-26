import Ember from 'ember';
import moment from 'moment';

export function dateDisplay(params) {
  var reviewDate = params[0].get('date');
  var formattedDate = moment(reviewDate).format("l");
  return formattedDate;
}

export default Ember.Helper.helper(dateDisplay);
