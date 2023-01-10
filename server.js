const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'gert34qgvfedsg4r3q4gdagf343',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


const hbs = exphbs.create({ helpers });

//Setting up the Handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Middle functions for parsing incoming requests with JSON payloads.
//app.use(express.urlencoded({ extended: true })) is using the urlencoded middleware function from the express module to parse incoming requests with URL-encoded payloads.
//app.use(express.static(path.join(__dirname, 'public'))) is using the static middleware function from the express module to serve static files from the specified directory.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));
//Using the routes object as middleware, we are telling the Express application to use the routes defined in the routes object to handle incoming requests.
app.use(routes);

//This code is using the sync method from the Sequelize library to synchronize the models with the database.
//The force: true option means that the synchronization will drop any existing tables and recreate them based on the models.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Connected'));
});
