import { render, screen } from "@testing-library/react"
import TodoList from "./TodoList"
// import userEvent from '@testing-library/user-event'



describe("Testing TodoList",()=>{
    let todos:Todo[]=[]

    beforeEach(()=>{
        todos =[
            {
                "userId": 1,
                "id": 10,
                "title": "illo est ratione doloremque quia maiores aut",
                "completed": true
              },
              {
                "userId": 1,
                "id": 11,
                "title": "vero rerum temporibus dolor",
                "completed": true
              },
              {
                "userId": 1,
                "id": 12,
                "title": "ipsa repellendus fugit nisi",
                "completed": true
              },
        ]


    })



    test('Todolist OK',()=>{
        render(<TodoList todos={todos} doDelete={()=>console.log("delete")}/>)
    })

    test('Todolist must have 3 todos',()=>{
        const r = render(<TodoList todos={todos} doDelete={()=>console.log("delete")}/>)
        const tr = r.container.querySelectorAll('tbody>tr')
        expect(tr.length).toBe(3)
    })


})
