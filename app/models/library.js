import { notEmpty } from '@ember/object/computed';
import DS from 'ember-data';
//import faker from 'faker';

export default DS.Model.extend({

  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),

  books: DS.hasMany('book', { inverse: 'library', async: true }),

  isValid: notEmpty('name'),

  // randomize() {
  //   this.set('name', faker.company.companyName() + ' Library');
  //   this.set('address', this._fullAddress());
  //   this.set('phone', faker.phone.phoneNumber());

  //   // If you would like to use in chain.
  //   return this;
  // },

  // _fullAddress() {
  //   return `${faker.address.streetAddress()}, ${faker.address.city()}`;
  // }
});
