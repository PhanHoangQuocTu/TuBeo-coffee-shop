const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override')
var bodyParser = require('body-parser')


const app = express()
const port = 3000


const db = require('./src/config/db/index')
db.connect();


app.use('/', express.static(path.join(__dirname, 'lib')))
//static file => css, img
app.use('/', express.static(path.join(__dirname, 'public')))

//middleware
app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());
app.use(bodyParser.json())

app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources' ,'views'));

const route = require('./src/routes')

//overide http/ method =put, delete, ...
app.use(methodOverride('_method'))

route(app);

app.listen(port, () => {
  console.log(`Restaurant web listening on port ${port}`)
})

