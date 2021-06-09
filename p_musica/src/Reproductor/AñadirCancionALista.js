import React, { useContext } from 'react'
import { StoreContext } from './index'

const Select = ({ onChange, listasMusica, idCancion }) => {
  const { state } = useContext(StoreContext)

  return (
    <select onChange={onChange}>
      <option>-</option>

      {listasMusica.map(list => (
        <option
          key={list}
          disabled={state.listasMusica[list].has(idCancion)}
          style={{ textTransform: 'capitalize' }}
        >
          {list}
        </option>
      ))}
    </select>
  )
}

const AñadirCancionALista = ({ idCancion }) => {
  const { state, dispatch } = useContext(StoreContext)

  const listasMusica = Object.keys(state.listasMusica).filter(
    list => !['home', 'favoritos'].includes(list)
  )

  if (listasMusica.length <= 0) return null

  const handleAdd = e => {
    const listaMusica = e.target.value
    if (listaMusica === '-') return
    dispatch({ type: 'añadirCancionALista', listaMusica })
  }

  if (state.AñadirCancionAListaId === idCancion) {
    return (
      <>
        <Select onChange={handleAdd} listasMusica={listasMusica} idCancion={idCancion} />

        <i
          className="fa fa-times"
          onClick={() => dispatch({ type: 'cancelarAñadirCancionALista' })}
          style={{ marginLeft: 10 }}
        />
      </>
    )
  } else
    return (
      <i
        className="fa fa-plus"
        onClick={() =>
          dispatch({ type: 'ponerCancionALista', idCancion })
        }
      />
    )
}

export default AñadirCancionALista