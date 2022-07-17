import { useContext } from 'react'
// import uniqid from 'uniqid'
import { nanoid } from 'nanoid'

import ContextTodoS from '../contexts/ContextTodoS'

interface Todo {
  value: string,
  id: string
}
interface Person {
  todoS?: Todo[];
  setTodoS?: (todoS: Todo[]) => void;
}

const useTodoS = () => {
  const context: Person = useContext(ContextTodoS)

  const addNewTodo = (value: string) => {
    const newTodoS = [...context.todoS || [], { value, id: nanoid() }]
    window.localStorage.setItem('todoS', JSON.stringify(newTodoS))
    if (context.setTodoS) context.setTodoS(newTodoS || [])
  }

  return {
    addNewTodo
  }
}

export default useTodoS