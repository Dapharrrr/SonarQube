const bcrypt = require('bcrypt');
const db = require('./db');

const Auth = {
    login: async (email, password) => {
        const user = db.find(email);
        if (user) {
            const match = password === user.password; 
            if (match) {
                return user;
            }
        }
        return null;
    },
    register: async (name, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, email, password: hashedPassword };
        db.save(user);
    }
};

module.exports = Auth;
