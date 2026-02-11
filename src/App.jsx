import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal.jsx";
import React, { useState, useEffect } from "react"
import Counter from "./components/Counter.jsx"

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  }

  function onModalCancel() {
    console.log(`Cancel`)
    setShowModal(false)
  }

  function onModalConfirm() {
    console.log(`Confirm`)
    setShowModal(false)
  }

  useEffect(() => {
    console.log(`only on mount`)
  }, [])




  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k job" />
      </div>
      {showModal && <Modal onModalCancel={onModalCancel} onModalConfirm={onModalConfirm} title="Confirm Delete?" />}
    </div>
  )
}

export default App;








//