import Ember from 'ember';

export default Ember.Service.extend({
  socket: {},
  submitTicket: function(ticket) {
      this.get('socket').emit('ticket-submitted', ticket);
  },
  setup: function () {
//    this.set('socket', io());
  }.on('init'),

});
