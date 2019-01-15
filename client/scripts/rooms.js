var roomList = {};

var Rooms = {
  add: function() {
    var prompt = window.prompt('Provide Room Name');
    if (roomList[prompt] === undefined) {
      RoomsView.renderRoom(prompt);
    }
  }

};