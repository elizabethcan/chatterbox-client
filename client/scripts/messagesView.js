var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('body').on('click', '.username', function(event) {
      var name = event.currentTarget.innerHTML;
      Friends.toggleStatus(name);
      MessagesView.render();
    });
  },

  render: function() {
    var chatLogs = $('#chats .username');
    for (let i = 0; i < chatLogs.length; i++) {
      for (let name in friendList) {
        if (chatLogs[i].textContent === name) {
          if (friendList[name] === false) {
            $(chatLogs[i]).removeClass('friend');
          } else {
            $(chatLogs[i]).addClass('friend');
          }
        }                 
      }
    }
  },
  
  renderMessage: function(message) {
    var newMessage = `<div class='chat'><span class='username'>${escapeHtml(message.username)}</span>: ${escapeHtml(message.text)}</div>`;
    Rooms.furnish(message.roomname, newMessage);
    var currentRoom = $('#rooms select').val();
    // $('#chats').html(roomList[currentRoom]);
    
    $('#chats').append(newMessage);
  },
  
  compile: function(divArray) {
    return _.reduce(divArray, function(acc, value) {
      return acc + value;
    }, '');
  }

};