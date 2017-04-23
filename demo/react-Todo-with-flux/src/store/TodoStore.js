import {EventEmitter} from "events";
import Dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todo = [];
    }

    createTodo(text) {
        this.todo.push(text);
        this.emit('change');
    }

    getAll() {
        return this.todo;
    }

}

const todoStore = new TodoStore;
Dispatcher.register(function (action) {
    switch (action.type) {
        case "CREATE_TODO": {
            todoStore.createTodo(action.text);
        }
    }
});
module.exports = todoStore;
