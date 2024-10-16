import React, { useState, useEffect } from "react";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

export default function useFetchTodos() {
  const dao = new TodoDAO();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dao.findAll();
        setTodos(data);
        setLoading(false);
      } catch (error:unknown) {
        setError(error)
      }
    };
    fetchData();
  }, []);

  return { todos, setTodos,loading,error };
}
