import Ember from 'ember';

/* global io */

export default Ember.Service.extend({
  apiUrl: 'http://localhost:3000',
  socket: {},
  submitTicket: function(ticket) {
      this.get('socket').emit('ticket-submitted', ticket);
  },
  setup: function () {
      this.set('socket', io(this.apiUrl));
  }.on('init'),

});
