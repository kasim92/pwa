import { connection } from "./jsstore_con";

export class TodosService {

    constructor() {
        this.tableName = "Todos";
    }

    getTodos() {
        return connection.select({
            from: this.tableName,
        })
    }

    addTodo(todo) {
        return connection.insert({
            into: this.tableName,
            values: [todo],
            return: true
        })
    }

    // getStudentById(id) {
    //     return connection.select({
    //         from: this.tableName,
    //         where: {
    //             id: id
    //         }
    //     })
    // }

    removeTodo(id) {
        return connection.remove({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    updateTodoById(todo) {
        return connection.update({
            in: this.tableName,
            set: {
                title: todo.title,
                isCompleted: todo.isCompleted,
            },
            where: {
                id: todo.id
            }
        })
    }
}