import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('author');
  },

  actions:{

    saveAuthor(author){
      author.set('isEditing', false);
      author.save();
    },

    cancelAuthorEdit(author){
      author.set('isEditing', false)
    },

	  deleteAuthor(author) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        author.destroyRecord();
      }
	  }

  }

});