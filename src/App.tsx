import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import SectionCreate from './sections/SectionCreate'
import SectionList from './sections/SectionList'
import { ProviderContextTodoS } from './contexts/ContextTodoS'
import ModalCreateTodo, { openModalCreateTodo } from './components/ModalCreateTodo'

const App = () => {
  const esTablet = useMediaQuery({ query: '(max-width: 1000px)' })

  return (
    <ProviderContextTodoS>
      <Container className="row row-cols-lg-2 g-0">
        { esTablet
          ? <ButtonModal className="btn btn-primary"
              onClick={ openModalCreateTodo }
            >
            <span className="visually-hidden">Agregar modal</span>
            +
          </ButtonModal>
          : <SectionCreate />
        }
        <SectionList />
      </Container>
      <ModalCreateTodo />
    </ProviderContextTodoS>
  )
}

const Container = styled.main`
  min-height: 100vh;
  width: 80vw;
  margin: auto;
  place-content: center;
`
const ButtonModal = styled.button`
  position: absolute;
  top: 10px;
  padding: 5px 15px;
  font-size: 2rem;
  border-radius: 50%;
  width: auto;
  right: 10px;
`

export default App
