import { useContext } from 'react'
// import uniqid from 'uniqid'
import { nanoid } from 'nanoid'

import ContextTodoS from '../contexts/ContextTodoS'

interface Todo {
  value: string;
  id: string;
  isFinished: boolean;
}
interface TodoCon {
  todoS?: Todo[];
  setTodoS?: (todoS: Todo[]) => void;
}

const useTodoS = () => {
  const context: TodoCon = useContext(ContextTodoS)

  const addNewTodo = (value: string) => {
    const newTodoS = [
      ...context.todoS || [],
      { value, id: nanoid(), isFinished: false }
    ]
    window.localStorage.setItem('todoS', JSON.stringify(newTodoS))
    if (context.setTodoS) context.setTodoS(newTodoS || [])
  }
  const removeTodo = (id: string) => {
    const newTodoS = context.todoS?.filter(todo => todo.id !== id)
    window.localStorage.setItem('todoS', JSON.stringify(newTodoS))
    if (context.setTodoS) context.setTodoS(newTodoS || [])
  }
  const toggleTodo = (id: string) => {
    const newTodoS = context.todoS?.map(todo => {
      if (todo.id === id) return { ...todo, isFinished: !todo.isFinished }

      return todo
    }
    )
    window.localStorage.setItem('todoS', JSON.stringify(newTodoS))
    if (context.setTodoS) context.setTodoS(newTodoS || [])
  }

  return {
    addNewTodo,
    removeTodo,
    toggleTodo
  }
}

export default useTodoS
