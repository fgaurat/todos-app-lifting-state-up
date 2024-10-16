import { useEffect } from 'react'
import { useState } from 'react'
import { Todo } from '../../core/Todo'



function TodoListFetch() {
  
    
    const [data,setData] = useState<Todo[]>([])

    useEffect(() => {
  
      ( async () =>{
        const url = import.meta.env.VITE_TODOS_URL
        const data = await fetch(url).then(r=>r.json())
        setData(data)
    
      })()
    }, [])
  return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>completed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((todo:Todo) =>
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed?"ok":"ko"}</td>
                        <td></td>
                    </tr>    
                )}
                </tbody>
        </table>
    </>
  )
}

export default TodoListFetch