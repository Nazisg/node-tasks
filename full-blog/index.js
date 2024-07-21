const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const router = require('./routes');
const session = require('express-session');

const Blog = require('./models/blog');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(session({
    secret: 'secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged || false;
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))

app.use('/', router);

const init = async () => {
    sequelize.authenticate()
    sequelize.sync()
}
init()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
