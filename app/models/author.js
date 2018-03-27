import { empty } from '@ember/object/computed';
import DS from 'ember-data';
//import faker from 'faker';

export default DS.Model.extend({

  name: DS.attr('string'),
  books: DS.hasMany('book', { inverse: 'author', async: true }),

  isNotValid: empty('name'),

  randomize() {
    this.set('name', faker.name.findName());

    // With returning the author instance, the function can be chainable,
    // for example `this.store.createRecord('author').randomize().save()`,
    // check in Seeder Controller.
    return this;
  }
});