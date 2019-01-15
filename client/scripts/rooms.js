var roomList = {};

var Rooms = {
  add: function() {
    var prompt = window.prompt('Provide Room Name');
    if (roomList[prompt] === undefined) {
      RoomsView.renderRoom(prompt);
      roomList[prompt] = '';
    }
    $('#rooms select').val(prompt);
    $('#chats').html(roomList[prompt]);
  },

  furnish: function(room, message) {
    if (room !== undefined) {
      if (roomList[room] === undefined) {
        RoomsView.renderRoom(room); // this line breaks the test
        roomList[room] = message;
      } else {
        roomList[room] += message;
      }
    }
  }

};