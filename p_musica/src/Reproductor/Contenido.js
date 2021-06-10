import React, { useContext, useCallback, useState } from 'react'
import { StoreContext } from './index'
import 'font-awesome/css/font-awesome.min.css'

import Modal from './Modal'
import Toast from './Toast'

const Contenido = () => {
  const { state, dispatch } = useContext(StoreContext)

  const [toast, setToast] = useState('')
  const [playlistSelect, setPlayListSelect] = useState('')
  const [playVisibleId, setPlayVisibleId] = useState(false)

  const actualListaMusica = state.actualListaMusica

  const listasMusica = Object.keys(state.listasMusica).filter(
    list => !['home', 'favoritos'].includes(list)
  )

  const idsCanciones = Array.from(
    state.listasMusica[actualListaMusica]
  )

  const handleSelect = useCallback(e => {
    setPlayListSelect(e.target.value)
  })

  return (
    <div className="Contenido">
      <div className="tituloLista">{actualListaMusica}</div>

      {idsCanciones.length <= 0 ? (
        <p style={{ marginTop: 15 }}>Tienes la lista vacía de canciones, ve y añade algunas! :D</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Titulo</td>
              <td>Artista</td>
              <td>Duración</td>
            </tr>
          </thead>

          <tbody>
            {idsCanciones.map(id => {
              const { titulo, artista, duracion } = state.media[id]
              const esFavorita = state.listasMusica.favoritos.has(id)

              return (
                <tr key={id}>
                  <td
                    onMouseEnter={() =>
                      setPlayVisibleId(id)
                    }
                    onMouseLeave={() =>
                      setPlayVisibleId('')
                    }
                    style={{ width: 75, paddingLeft: 5 }}
                  >
                    <PlayPause
                      reproduccion={state.reproduccion}
                      idCancion={id}
                      esCancionActual={
                        state.idCancionActual === id
                      }
                      visible={playVisibleId === id}
                    />

                    <span style={{ marginRight: 10 }} />

                    <Favorito
                      esFavorita={esFavorita}
                      idCancion={id}
                    />

                    <span style={{ marginRight: 10 }} />

                    <i
                      className="fa fa-plus"
                      onClick={() => {
                        dispatch({
                          type: 'añadirALista',
                          idCancion: id
                        })
                      }}
                    />
                  </td>
                  <td>{titulo}</td>
                  <td>{artista}</td>
                  <td>{duracion}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      <Modal
        show={state.AñadirCancionAListaId}
        close={() => {
          dispatch({ type: 'abortarAñadirALista' })
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 18, marginBottom: 20 }}>
            Añadir a Lista
          </div>

          {listasMusica.length < 1 ? (
            <>
              <p>
                No tienes ninguna lista personalizada, corre y añade una!
              </p>

              <div style={{ marginTop: 15 }}>
                <button>Ok</button>
              </div>
            </>
          ) : (
            <>
              <select
                value={playlistSelect}
                onChange={handleSelect}
                style={{
                  fontSize: 16,
                  textTransform: 'capitalize',
                  width: 115,
                  height: 25
                }}
              >
                <option value="">Elegir</option>

                {listasMusica.map(list => (
                  <option
                    key={list}
                    value={list}
                    disabled={state.listasMusica[list].has(
                      state.AñadirCancionAListaId
                    )}
                  >
                    {list}
                  </option>
                ))}
              </select>

              <div style={{ marginTop: 20 }}>
                <button
                  onClick={() => {
                    if (playlistSelect === '') return

                    dispatch({
                      type: 'guardarLista',
                      listaMusica: playlistSelect
                    })

                    setToast(
                      'Se ha guardado con éxito.'
                    )

                    setPlayListSelect('')
                  }}
                >
                  Guardar
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>

      <Toast toast={toast} close={() => setToast('')} />
    </div>
  )
}
const Favorito = ({ esFavorita, idCancion }) => {
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

const PlayPause = ({ reproduccion, idCancion, esCancionActual, visible }) => {
  const { dispatch } = useContext(StoreContext)
  const style = { visibility: visible ? 'visible' : 'hidden' }

  if (esCancionActual && reproduccion) {
    return (
      <i
        className="fa fa-pause"
        onClick={() => dispatch({ type: 'pausa' })}
        style={style}
      />
    )
  } else {
    return (
      <i
        className="fa fa-play"
        onClick={() => dispatch({ type: 'play', idCancion })}
        style={style}
      />
    )
  }
}

export default Contenido