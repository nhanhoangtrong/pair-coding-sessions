module.exports = class TodoRepository {
    constructor() {
        this.data = [];
        this.listeners = [];
    }

    onChange(func) {
        this.listeners.push(func);
    }

    push(item) {
        this.data.push(item);
        this.notifyListeners();
    }

    getItems() {
        return this.data;
    }

    notifyListeners() {
        for (let key in this.listeners) {
            this.listeners[key]();
        }
    }
};
