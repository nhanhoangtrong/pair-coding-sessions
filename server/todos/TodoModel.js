class Todo {
    constructor(text, complete) {
        this.text = text;
        this.complete = complete;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
}
module.exports = Todo;
