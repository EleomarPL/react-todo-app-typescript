import styled from 'styled-components'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import SectionCreate from './sections/SectionCreate'
import SectionList from './sections/SectionList'
import { ProviderContextTodoS } from './contexts/ContextTodoS'

const App = () => {
  return (
    <ProviderContextTodoS>
      <Container className="row row-cols-lg-2 g-0">
        <SectionCreate />
        <SectionList />
      </Container>
    </ProviderContextTodoS>
  )
}

const Container = styled.main`
  min-height: 100vh;
  width: 80vw;
  margin: auto;
  place-content: center;
`

export default App
