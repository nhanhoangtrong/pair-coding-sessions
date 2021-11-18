class TodoListView {
    constructor(todoRepository) {
        this.uncompletedList = todoRepository.getItems().filter(todo => !todo.completed);
        this.todoRepository = todoRepository;
        todoRepository.onChange(this.handleChange.bind(this));
    }

    handleChange() {
        this.uncompletedList = this.todoRepository.getItems().filter(todo => !todo.completed);
    }

    getUncompletedList() {
        return this.uncompletedList;
    }
}

module.exports = TodoListView;
