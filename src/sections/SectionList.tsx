import styled from 'styled-components'

const SectionList = () => {
  return (
    <Section className="px-4">
      <h2>Tus tareas</h2>
      <p>Completadas 0 de 0</p>
      <form className="mb-2 text-start">
        <label htmlFor="search" className="visually-hidden">
          Buscar
        </label>
        <input type="text" className="form-control"
          id="search" placeholder="Buscar tarea"
        />
      </form>
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
`

export default SectionList
