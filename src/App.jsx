import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos , setTodo] = useState([]);
  const [Edited , isEdited] = useState(false);
  const todoValue = useRef()
  const editedTodoValue = useRef()
const addTodo = (e)=>{
  e.preventDefault()
  todos.push(todoValue.current.value)
  setTodo([...todos])
  todoValue.current.value = ''
  
}
const editedBtn =(index)=>{
  setTodo([...todos])
  isEdited(index)
  console.log(todos);
  

}
const UpdatedBtn =(index)=>{
  todos.splice(index,1,editedTodoValue.current.value)
  setTodo([...todos])
  isEdited(false)

}
const deletebtn =(index)=>{
  console.log(todos);
  
  todos.splice(index,1)
  setTodo([...todos])
  isEdited(false)

}
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo App</h1>
      
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={addTodo} className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new todo"
              ref={todoValue}
            />
            <button className="btn btn-primary" type="submit" >
              Add Todo
            </button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {
                  Edited === index ? (
                    <input type="text" className="form-control me-2" defaultValue={todo} ref={editedTodoValue} />
                  ) : (
                    <input type="text" className="form-control me-2" defaultValue={todo} disabled />
                  )
                }
                <div className="btn-group">
                  {
                    Edited === index ? (
                  <button className="btn btn-primary btn-sm me-2"  onClick={()=>UpdatedBtn(index)}>
                    Update
                  </button>
                    ) : (
                  <button className="btn btn-success btn-sm me-2" onClick={()=>editedBtn(index)} >
                    Edit
                  </button>

                    )
                  }
                  <button className="btn btn-danger btn-sm" onClick={()=>deletebtn(index)} >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
