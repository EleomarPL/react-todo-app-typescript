import { useState, createContext, ReactNode } from 'react'

const ContextTodoS = createContext({})

interface ContextsParams {
  children: ReactNode
}
export const ProviderContextTodoS = ({ children }: ContextsParams) => {
  const localValuesTodoS: Array<{value: String}> = JSON.parse(window.localStorage.getItem('todoS') || '[]')
  const [todoS, setTodoS] = useState(localValuesTodoS)

  return (
    <ContextTodoS.Provider value={ { todoS, setTodoS } }>
      { children }
    </ContextTodoS.Provider>
  )
}

export default ContextTodoS
