import { match, gte, and } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
	emailAddress: '',
	message: '',
	responseMessage: '',

	isLongEnough: gte('message.length', 5),
	isValid: match('emailAddress', /^.+@.+\..+$/),
	isLongAndValid: and('isLongEnough', 'isValid'),

	actions: {
	    sendMessage: function() {
	      const email = this.get('emailAddress');
	      const message = this.get('message');

	      const sendMessage = this.store.createRecord('contact', { email, message});
	      sendMessage.save().then(()=> {
	      	let responseMessage = 'To: ' + email + ', Message: ' + message;
		      this.set('responseMessage', responseMessage);
		      this.set('emailAddress', '');
		      this.set('message', '');
	      });
	    }
	  }
});
