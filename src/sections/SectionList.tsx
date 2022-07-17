import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'

import ContextTodoS from '../contexts/ContextTodoS'
import useTodoS from '../hooks/useTodoS'

interface Todo {
  value: string;
  id: string;
  isFinished: boolean;
}
interface TodoObject {
  todoS?: Todo[];
  setTodoS?: (todoS: Todo[]) => void;
}

const SectionList = () => {
  const contextTodo: TodoObject = useContext(ContextTodoS)
  const [completedTodoS, setCompletedTodoS] = useState<number>(0)

  const { removeTodo, toggleTodo } = useTodoS()

  useEffect(() => {
    if (contextTodo.todoS) {
      const todoS = contextTodo.todoS.filter(todo => todo.isFinished)
      setCompletedTodoS(todoS.length)
    }
  }, [contextTodo.todoS])

  const handleRemoveTodo = (id: string) => removeTodo(id)
  const handleToogleTodo = (id: string) => toggleTodo(id)

  return (
    <Section className="px-4">
      <h2>Tus tareas</h2>
      <p>Completadas { completedTodoS } de { contextTodo.todoS?.length }</p>
      <form className="mb-2 text-start">
        <label htmlFor="search" className="visually-hidden">
          Buscar
        </label>
        <input type="text" className="form-control"
          id="search" placeholder="Buscar tarea"
        />
      </form>
      { contextTodo.todoS &&
        contextTodo.todoS.map(todo => (
          <div key={ todo.id } className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <button
                className={ `btn ${todo.isFinished ? 'btn-success' : 'btn-primary'} fs-5` }
                onClick={ () => handleToogleTodo(todo.id) }
              >
                { todo.isFinished ? '✓' : '✗' }
              </button>
              { todo.isFinished
                ? <del>{ todo.value }</del>
                : <span>{ todo.value }</span>
              }
              <button className="btn btn-danger"
                onClick={ () => handleRemoveTodo(todo.id) }
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      }
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
`

export default SectionList
