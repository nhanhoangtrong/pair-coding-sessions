const UserModel = require("./UserModel");

const users = [];

const userController = {
    findAll() {
        return users;
    },

    findByName(name) {
        return users.find(u => u.name.includes(name));
    },

    createUser(name, email) {
        const newUser = new UserModel(name, email);
        users.push(newUser);
        return newUser;
    },

    deleteUserByEmail(email) {
        users.length = 0;
        users.push(...users.filter(u => u.email !== email));
    }
}

module.exports = userController;