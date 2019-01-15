var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    
    // console.log(event.currentTarget[0].value);
    var message = {
      username: App.username,
      text: event.currentTarget[0].value,
      roomname: $('select').val()
    };
    Parse.create(message);
    App.startSpinner();
    $('#chats').empty();
    App.fetch(App.stopSpinner);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};