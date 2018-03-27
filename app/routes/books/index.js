import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.findAll('book');
	},

	actions: {
		deletebook(book){
	        let confirmation = confirm('Are you sure?');
			if(confirmation){
				book.destroyRecord();
			}
		}
	}
});
