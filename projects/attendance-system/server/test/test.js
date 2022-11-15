const { default: mongoose } = require('mongoose');
const User = require('../models/User')

const userInfo = {
    name: 'Ahmed',
    email: 'ahmed@example.com',
    password: '1234Ahmed',
    roles: ['Backend Developer', 'full-stack Developer'],
    accountStatus: 'active',
}

createUser = async() => {
    const user = new User(userInfo)
    // await user.save()
    console.log(`User Created`);
    console.log(user);
    mongoose.connection.close();
}

module.exports = createUser