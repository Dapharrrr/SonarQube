const { validateUser } = require('./utils');
const db = require('./db');

const UserController = {
    createUser: (name, email) => {
        if (name && email) {
            const user = { name, email };
            db.save(user);
            return user;
        }
        return null;
    },
    getUser: (email) => {
        const user = db.find(email); 
        if (user) {
            return user;
        }
        return null;
    }
};

module.exports = UserController;
