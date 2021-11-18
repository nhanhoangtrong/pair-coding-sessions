class UserModel {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `${this.name} <${email}>`;
    }
}

module.exports = UserModel;
