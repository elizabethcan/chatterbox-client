var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderMessage: function(message) {
    var newMessage = `<div>${message.username}: ${message.text}</div>`;
    if (message.roomname !== undefined) {
      if (Rooms[message.roomname] === undefined) {
        Rooms[message.roomname] = newMessage;        
      } else {
        Rooms[message.roomname] += newMessage;        
      }
    }
    $('#chats').append(newMessage);
  }

};