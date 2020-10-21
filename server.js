var express = require("express");

var app = exress();
var PORT = 3000;

app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, funtion()
{
    console.log("App listening on PORT " + PORT);
});