import React from 'react'
import TodoList, { TodoListProps } from '../TodoList/TodoList'
import { Todo } from '../../core/Todo'

function HOCCompletedTodoList(TodoList:any) {
  
    
    return ({todos,doDelete}:TodoListProps)=>{
        const completedTodoList = todos.filter((todo:Todo)=>todo.completed)
        return <TodoList todos={completedTodoList} doDelete={doDelete}/>

    }
}

export default HOCCompletedTodoList