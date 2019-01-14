var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderRoom: function(room) {
    $('#rooms select').append(`<option value="${room}">${room}</option>`);
  }

};
