// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shajidur', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('hi, it is mongoose')
});

const kittySchema = new mongoose.Schema({
    name: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = "My name is " + this.name
    // console.log(greeting);
} 
const testing = mongoose.model('testing', kittySchema); // here will creat collections 

const shajidur = new testing({ name: 'shajidur rahman' });
console.log(shajidur.name); // 'Silence'

const jannat = new testing({ name: 'shahanaj' }); // here will added objects to the collections
console.log(jannat.name); // 'Silence'

shajidur.save(function (err, shajidur) { // it will save all the collections to the db
    if (err) return console.error(err);
    shajidur.speak();
});

testing.find({name:"shajidur rahman"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})