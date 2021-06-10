import React, { useContext } from 'react'
import { StoreContext } from './index'

const CancionFavorita = ({ esFavorita, idCancion }) => {
  const { dispatch } = useContext(StoreContext)

  return esFavorita ? (
    <i
      className="fa fa-heart"
      onClick={() => dispatch({ type: 'borrarFavorito', idCancion })}
    />
  ) : (
    <i
      className="fa fa-heart-o"
      onClick={() => dispatch({ type: 'añadirFavorito', idCancion })}
    />
  )
}

export default CancionFavorita