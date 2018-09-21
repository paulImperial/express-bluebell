const express = require('express');
const chalk = require('chalk');
const app = express();
const router = require('./route.js');
const handlebars = require('express-handlebars');
const path = require('path');

app.set('views','views');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({defaultLayout: 'main',
                            partialsDir:"views/partials/",
                            extname:".hbs"}));
app.use(express.static('public'));

app.use(router);

app.listen(8000, function(){
    console.log(chalk.green('listening on port 8000...'));
})