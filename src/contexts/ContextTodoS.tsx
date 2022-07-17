import { useState, createContext, ReactNode } from 'react'

const ContextTodoS = createContext({})

interface ContextsParams {
  children: ReactNode
}
interface TodoS {
  value: string
  id: string
}
export const ProviderContextTodoS = ({ children }: ContextsParams) => {
  const localValuesTodoS: TodoS[] = JSON.parse(window.localStorage.getItem('todoS') || '[]')
  const [todoS, setTodoS] = useState(localValuesTodoS)

  return (
    <ContextTodoS.Provider value={ { todoS, setTodoS } }>
      { children }
    </ContextTodoS.Provider>
  )
}

export default ContextTodoS
