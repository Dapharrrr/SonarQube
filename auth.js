const bcrypt = require('bcrypt');
const db = require('./db');

// Fonction de validation des entrées
// Cette fonction vérifie si l'entrée est une chaîne non vide
const validateInput = (input) => {
    return typeof input === 'string' && input.trim().length > 0;
};

const Auth = {
    login: async (email, password) => {
        // Validation des entrées
        if (!validateInput(email) || !validateInput(password)) {
            throw new Error("Invalid input");
        }

        const user = db.find(email);
        if (user) {
            // Vérification du mot de passe haché
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return user;
            }
        }
        return null;
    },

    register: async (name, email, password) => {
        // Validation des entrées
        if (!validateInput(name) || !validateInput(email) || !validateInput(password)) {
            throw new Error("Invalid input");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, email, password: hashedPassword };
        db.save(user);
    }
};

module.exports = Auth;