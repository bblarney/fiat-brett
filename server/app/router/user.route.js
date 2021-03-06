module.exports = function(app) {
    const user = require('../controller/user.controller.js');
 
    // Create a new user
    app.post('/user/register', user.create);
 
    // Retrieve a single user by username
    app.get('/user/:username', user.findById);
 
    // Update a user with username
    app.put('/user', user.update);
  
    // Check if user exists
    app.get('/jacob', user.checkUserName)
    
    // Delete a user with username
    app.delete('/user/:username', user.delete);

    app.post('/user/login', user.login);

    app.post('/user/refresh', user.refresh);

    //verify user
    app.get('/verify', user.verify);
}