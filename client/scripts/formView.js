var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {  
    event.preventDefault();  
    // console.log(event.currentTarget[0].value);
    var message = {
      username: App.username,
      text: event.currentTarget[0].value,
      roomname: $('select').val()
    };
    Parse.create(message);
    App.startSpinner();
    $('#chats').empty();
    $('input#message').val('');
    App.fetch(App.stopSpinner);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};