import { Todo } from "../../core/Todo";



interface TodoRowProps{
    todo:Todo,
    doDelete:(todo:Todo)=>void
}

function TodoRow({todo,doDelete}: TodoRowProps) {


    return <tr>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            {todo.id}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {todo.title}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {todo.completed?"Yes":"No"}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <button
                onClick={()=>doDelete(todo)}
                className="text-red-600 hover:text-red-900"
            >
                Delete<span className="sr-only">, {todo.title}</span>
            </button>
        </td>
    </tr>;
}

export default TodoRow