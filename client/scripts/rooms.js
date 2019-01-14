var Rooms = {
  add: function() {
    var prompt = window.prompt('Provide Room Name');
    RoomsView.renderRoom(prompt);
  }

};