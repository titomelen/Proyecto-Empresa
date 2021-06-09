import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const Modal = ({ children, show, close }) => {
  if (!show) return null

  return (
    <div className="Modal">
      <div className="hijoModal">
        <i className="fa fa-times" onClick={close} />
        {children}
      </div>
    </div>
  )
}

export default Modal