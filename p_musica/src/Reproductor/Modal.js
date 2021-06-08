import React from 'react'

const Modal = ({ children, show, close }) => {
  if (!show) return null

  return (
    <div className="Modal">
      <div className="hijoModal">
        {children}
        <button className="boton" onClick={close}>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal