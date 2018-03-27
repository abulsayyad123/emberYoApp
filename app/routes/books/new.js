import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return this.store.createRecord('book');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Add new Book');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('books/form');
  },

  actions: {

    saveBook(newBook) {
      newBook.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
