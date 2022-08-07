const { User } = require('../models');

const userData = [
    {
        username: 'brad',
        email: 'brad@email.com',
        password: 'password'
    },
    {
        username: 'debWilson',
        email: 'deb@email.com',
        password: 'password'
    },
    {
        username: 'barbLovits',
        email: 'barb@email.com',
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;