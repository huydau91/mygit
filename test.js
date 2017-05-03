var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
prompt.start();

prompt.get([{
    name: 'name',
    description: 'Your name',
    type: 'string',
    required: true
  }, {
    name: 'surname',
    description: 'Your surname',
    type: 'string',
    required: true,
    message: 'Please dont use the demo credentials',
    conform: function(surname) {
      var name = prompt.history('name').value;
      return (name !== 'John' || surname !== 'Smith');
    }
  }], function(err, results) {
    console.log(results);
  });