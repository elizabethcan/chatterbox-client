var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderMessage: function(message) {
    var newMessage = `<div class='chat'><span class='username'>${message.username}</span>: ${message.text}</div>`;
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