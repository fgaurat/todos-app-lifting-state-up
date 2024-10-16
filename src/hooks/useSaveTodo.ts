import React, { useState } from "react";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

export default function useSaveTodo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  
  const dao = new TodoDAO();
  
  const saveTodo = async (todo:Todo)=>{
    
    setLoading(true)
    try{
      const newTodo:Todo = await dao.save(todo)
      setLoading(false)
      return newTodo
    }
    catch(error){
      setLoading(false)
    }


  }


  return { saveTodo, loading,error };
}
