// Required Modules
var express = require("express");

require('./app/route/user.route.js')(app);

var app = express()

var port = process.env.PORT || 10002

const hostname ='10.10.193.143'

app.use(express.static("../dist/FIAT/"));

app.get("/", function(req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    initial();
});

// Create a Server
app.listen(port, hostname, function () {
 
    console.log("App listening at http://%s:%s", hostname, port);
    console.log("open myvmlab.senecacollege.ca:6350 to view in browser");
});

function initial(){
    let users = [
        {
            username: "admin",
            password: "admin",
            firstname: "admin",
            lastname: "admin",
            email: "admin",
            recoveryQuestion: "admin",
            recoveryAnswer: "admin"
        }
    ]

    // Init data -> save to PostgreSQL
    const User = db.users;
    for (let i = 0; i < users.length; i++) { 
    User.create(users[i]);  
    }
}
