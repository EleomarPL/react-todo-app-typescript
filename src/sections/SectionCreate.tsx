import styled from 'styled-components'
import { FormEvent, useRef } from 'react'

const SectionCreate = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleAddTask = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    formRef.current?.reset()
  }

  return (
    <Section>
      <h1>Crear una nueva tarea</h1>
      <form className="mb-2 text-start" onSubmit={ handleAddTask }
        ref={ formRef }
      >
        <label htmlFor="newtask" className="form-label">
          Nueva Tarea
        </label>
        <textarea className="form-control"
          id="newtask" placeholder="Nueva tarea"
        />
        <Button>
          Crear Tarea
        </Button>
      </form>
      <picture>
        <source
          srcSet={ new URL('../img/added.webp', import.meta.url) }
        />
        <Image src={ new URL('../img/added.png', import.meta.url) }
          alt="Add Task"
        />
      </picture>
    </Section>
  )
}

const Section = styled.section`
  display: block;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  color: #3c0272;
  text-align: center;
`
const Image = styled.img`
  width: 80%;
  object-fit: contain;
  height: auto;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
  color: #fff;
  background-color: #562085;
  padding: 10px 15px;
  transition: background-color .2s ease-in-out;
`

export default SectionCreate
