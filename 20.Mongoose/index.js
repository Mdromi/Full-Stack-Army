const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const personInfo = {
    firstName: 'Aditya',
	lastName: 'Chakraborty',
	email: 'aditya@example.com',
	age: 30,
	bio: 'Backend Developer',
	single: true,
}


personfunction = async() => {
    const Person = require('./Person')
    const person = new Person(personInfo)
    // await person.save()
    console.log(`Person Created`);
    console.log(person);
}

const PORT = process.env.PORT || 4000;
const uri = `mongodb://localhost:27017/mongo`;
mongoose
    .connect(uri, { 
        useNewUrlParser: true, 
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('MongoDB connected...');
            personfunction()
            console.log(`Server is listing on PORT ${PORT}`);
        })
    })
    .catch(e => {
        console.log(e);
    })