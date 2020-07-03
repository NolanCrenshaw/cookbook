/* 
    Express Templating Example
        - v^4.0.0
        - most recent update 7/1/20
        - rendering pug file 
*/

// -------------

// require express package
const express = require('express');

// declare package object
const app = express();

// declare objects from database models
const { Pet, Owner, PetType } = require('/models');

// establish view engine as pug
app.set('view engine', 'pug');

// 
app.use(express.urlencoded({ extended: true }));

//
app.get('/pets', async (req, res) => {
    const data = {};

    const pets = await Pet.findAll({
        include: [PetType, Owner],
        order: ['name'],
    });

    const petTypes = await PetType.findAll({
        order: ['type']
    });

    data.pets = pets;
    data.petTypes = petTypes;

    res.render('pets', data);
});

app.get('/owners', async (req, res) => {
    const data = {};

    res.render('owners', data);
});

//
app.post('/pets', async (req, res) => {
    const { body: data } = req;

    const pet = await Pet.create({
        name: data.name,
        age: data.age,
        petTypeId: data.typeId
    });

    const ownerids = data.ownerIds.split(',');
    const owners = await Owner.findAll({ where: { id: ownerIds }});
    for (let owner of owners) {
        await pet.addowner(owner);
    }

    res.redirect('/pets');
});

app.post('/owners', async (req, res) => {
    const { body: data } = req;

    await Owner.create({

    })
})


// this example declares route accepting all request methods
app.all('*', (req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request path: ${req.path}`);

    // renders referenced pug file with included declared element variables
    res.render('layout', { title: 'Welcome', heading: 'Home' });
});

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));