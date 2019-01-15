var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('body').on('change', '#rooms select', function(event) {
      // console.log(roomList[event.currentTarget.value]);
      $('#chats').html(roomList[event.currentTarget.value]);
    });
    $('body').on('click', '#rooms button', function(event) {
      Rooms.add();
    });
  },

  render: function() {
  },
  
  renderRoom: function(room) {
    $('#rooms select').append(`<option value="${room}">${room}</option>`);
  }

};
