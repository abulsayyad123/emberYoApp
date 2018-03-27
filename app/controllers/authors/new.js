import Controller from '@ember/controller';

export default Controller.extend({
	selectedBooks: [],

	actions: {
		selectBook(event) {
      const selectedBooks = Ember.$(event.target).val();
      this.set('selectedBooks', selectedBooks || []);
    }
	}
});