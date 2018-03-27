import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return hash({
      author: this.store.createRecord('author'),
      books: this.store.findAll('book')
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Add new Author');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('authors/form');
  },

  actions: {

    saveAuthor(newAuthors) {
      let bookIds = this.controllerFor("authors.new").get('selectedBooks');
      let books = [];
      bookIds.forEach(bookId => {
        books.push(this.store.peekRecord("book", bookId));
      });
      if(books.length) {
        newAuthors.set("books", books);
      }
      newAuthors.save().then(() => this.transitionTo('authors'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});