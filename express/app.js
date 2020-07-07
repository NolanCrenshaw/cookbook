const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const csurf = require('csurf');
const csrfProtection = csurf({ cookie : true });

const { HairColor, Person } = require('./models');


const app = express();
const port = 8081;

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.set('view engine', 'pug');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/new-person', csrfProtection, asyncHandler(async (req, res) => {
    const hairColors = await HairColor.findAll({ order: ['color'] });
    res.render('new-person-form', { hairColors, token: req.csrfToken() });
}));

app.post('/new-person', csrfProtection, asyncHandler(async (req, res) => {
    const { firstName, lastName, age, biography, hairColorId } = req.body;
    await Person.create({
        firstName,
        lastName,
        age,
        biography,
        hairColorId 
    })
    res.redirect('/');

}));

app.get('/', asyncHandler(async (req, res) => {
    const people = await Person.findAll({ include : HairColor });
    res.render('person-list', { people });
}));

app.listen(port, () => {
    console.log(`Listening on port:${port}...`);
});




/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
