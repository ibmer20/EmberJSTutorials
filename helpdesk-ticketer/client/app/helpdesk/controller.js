import Ember from 'ember';

export default Ember.Controller.extend({
  tickets: [],

  actions: {
    submitTicket() {
      let ticket = {
        name: this.get('name'),
        description: this.get('description'),
        createdAt: new Date()
      };

      this.get('tickets').addObject(ticket);
      this.set('name', '');
      this.set('description', '');
    }
  },
  setup: function () {
    var socket = this.get('helpdesk.socket');
    socket.on('ticket-submitted', (ticket) => {
      this.get('tickets').pushObject(ticket);
    });
  }.on('init'),  
});
