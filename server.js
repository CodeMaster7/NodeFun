/////////////////////////////////////////////////////////
/////////////       Dependencies
////////////////////////////////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port =3000;

/////////////////////////////////////////////////////////
/////////////       Middleware
////////////////////////////////////////////////////////

app.use(express.static('public'));
///// app.use(bodyparser());      ------normal
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////////////////////////////////////
/////////////       Endpoints
////////////////////////////////////////////////////////
app.get('/api/message', function (req, res) {
    return res.send({"message": "hello user!!!!"});
});


app.listen(port, function () {
    console.log('Im watching you server 3000 @.@');
});


