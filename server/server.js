const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const morganBody = require("morgan-body");
const DB = require("./DB");
const errorHandler = require("./helpers/errorHandler");
const routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

morganBody(app);
app.disable('x-powered-by');

app.use("/api/business", routes);


app.use(errorHandler);

DB.open().then(() => {
    app.listen(PORT, function () {
        console.log('Server is running on Port:', PORT);
    });
}).catch(err => console.log("MongoDb connection error::::::::::::", err));