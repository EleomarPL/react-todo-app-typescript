import { Modal } from 'bootstrap'

export const openModalCreateTodo = () => {
  const modalCreate = new Modal(
    document.getElementById('ModalCreateTodo'), {
      keyboard: true,
      focus: true
    }
  )
  modalCreate.show()
}

const ModalCreateTodo = () => {
  return (
    <div className="modal fade" id="ModalCreateTodo"
      data-bs-backdrop="static" data-bs-keyboard="false"
      tabIndex={ -1 } aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fw-bold" id="staticBackdropLabel"
              style={ { fontSize: '1.25rem' } }
            >
              Crear Tarea
            </h2>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form className="modal-body">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor='titulo'>
                Nueva Tarea
              </label>
              <textarea className="form-control"
                placeholder="Escribir aquí..." aria-label="Tarea"
                aria-describedby="tarea" id="tarea"
                required
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">
                Agregar Tarea
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateTodo
