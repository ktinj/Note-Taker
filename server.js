const express = require("express");

const app = express();
var PORT = 3000;

app.use(express.json());

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./main/routes/apiRoutes.js")(app);
require("./main/routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on http://localhost: " + PORT);
});