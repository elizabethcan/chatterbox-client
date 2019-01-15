var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('body').on('click', '.username', function(event) {
      var name = event.currentTarget.innerHTML;
      Friends.toggleStatus(name);
    });
  },

  render: function() {
  },
  
  renderMessage: function(message) {
    var newMessage = `<div class='chat'><span class='username'>${message.username}</span>: ${message.text}</div>`;
    if (message.roomname !== undefined) {
      if (roomList[message.roomname] === undefined) {
        // RoomsView.renderRoom(message.roomname);
        roomList[message.roomname] = newMessage;        
      } else {
        roomList[message.roomname] += newMessage;        
      }
    }
    $('#chats').append(newMessage);
  }

};