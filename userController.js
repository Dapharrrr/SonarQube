const { validateUser } = require('./utils');
const db = require('./db');

const UserController = {
    createUser: (name, email) => {
        if (!validateUser({ name, email })) {
            throw new Error("Invalid user data");
        }
        
        const user = { name, email };
        db.save(user);
        return user;
    },
    getUser: (email) => {
        return db.find(email); // Simplification: retourne directement le résultat de la recherche
    }
};

module.exports = UserController;
