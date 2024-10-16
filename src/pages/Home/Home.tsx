import useDeleteTodo from "../../hooks/useDeleteTodo";
import useFetchTodos from "../../hooks/useFetchTodos";

import TodoList from "../../components/TodoList/TodoList";
import { Todo } from "../../core/Todo";
import TodoForm from "../../components/TodoForm/TodoForm";
import { FormEvent, FormEventHandler } from "react";
import useSaveTodo from "../../hooks/useSaveTodo";
import HOCCompletedTodoList from "../../components/HOCCompletedTodoList/HOCCompletedTodoList";
import TodoListFetch from "../../components/TodoListFetch";

export default function Home() {
  const { todos, setTodos, loading, error } = useFetchTodos();
  const { deleteTodo,loading: loadingDelete, error: errorDelete } = useDeleteTodo();
  const { saveTodo } = useSaveTodo();

  const CompletedTodoList = HOCCompletedTodoList(TodoList);

  if (loading) {
    return <>Loading ...</>;
  }

  if (error) {
    return <>Error ...</>;
  }

  const doDelete = async (todo: Todo) => {
    await deleteTodo(todo);
    const t = todos.filter((t) => t.id !== todo.id);
    setTodos(t);
  };

  const handleSubmit = async (todo: Todo) => {
    console.log(todo);
    const newTodo = await saveTodo(todo)
    todos.push(newTodo)

    setTodos([...todos])
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">

          <div className="w-full sm:w-auto flex-grow p-4">
            <TodoList todos={todos} doDelete={doDelete}></TodoList>
            <CompletedTodoList todos={todos} doDelete={doDelete}></CompletedTodoList>
            <TodoListFetch/>
          </div>
          <div className="w-full sm:w-auto flex-grow p-4">

            <TodoForm handleSubmit={handleSubmit}></TodoForm>
          </div>
        </div>
    </>
  );
}
