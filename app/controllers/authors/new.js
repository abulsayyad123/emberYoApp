import Controller from '@ember/controller';

export default Controller.extend({
	selectedBooks: [],

	isAdmin: true,

	checkboxObjects: [
		    Ember.Object.create({ id: "1", name: 'First Object',  isAdmin: false}),
		    Ember.Object.create({ id: "2", name: 'Second',  isAdmin: false}),
		    Ember.Object.create({ id: "3", name: 'Third',  isAdmin: false}),
		    Ember.Object.create({ id: "4", name: 'Fourth', isAdmin: false })
	],

	actions: {
		selectBook(event) {
	      const selectedBooks = Ember.$(event.target).val();
	      this.set('selectedBooks', selectedBooks || []);
	    },

	    getFilteredCheckbox(){
	    	let result = this.get('checkboxObjects').filterBy('isAdmin');
	    }
	}
});