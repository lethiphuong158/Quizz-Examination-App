import React from 'react'
import { useModal } from '../../context/Modal'

export type ModalProps = {
  title?: string
}

const Modal: React.FC<ModalProps> = ({ title }) => {
  const { hideModal, modalComponent } = useModal()

  return modalComponent ? (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button onClick={hideModal} type="button" className="btn-close">
              {null}
            </button>
          </div>
          <div className="modal-body">{modalComponent}</div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
