import { Todo } from "./Todo"

// Data Access Object
export interface DAO<T>{
    findAll():Promise<T[]>
    delete(todo:Todo):Promise<void>
    save(todo:Todo):Promise<Todo>
}