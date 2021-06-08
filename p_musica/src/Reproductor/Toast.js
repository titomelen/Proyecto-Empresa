import React, { useEffect } from 'react'

const Toast = ({ toast, close }) => {
  useEffect(() => {
    if (!toast) return

    const closeToast = () => {
      setTimeout(() => {
        close()
      }, 2500)
    }

    closeToast()

    return () => {
      clearTimeout(closeToast)
    }
  }, [toast])

  if (!toast) return null

  return (
    <div className="toast">
      {toast}
    </div>
  )
}

export default Toast