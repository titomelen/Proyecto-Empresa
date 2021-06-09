import React, { useContext } from 'react'
import { StoreContext } from './index'
import 'font-awesome/css/font-awesome.min.css'

import AñadirCancionALista from './AñadirCancionALista'
import CancionFavorita from './CancionFavorita'

const Contenido = () => {
  const { state, dispatch } = useContext(StoreContext)
  const actualListaMusica = state.actualListaMusica
  const esHomeOFavoritos = ['home', 'favoritos'].includes(actualListaMusica)
  const idsCanciones = Array.from(state.listasMusica[actualListaMusica])

  return (
    <div className="Contenido">
      <div className="tituloLista">{actualListaMusica}</div>

      {idsCanciones.length <= 0 ? (
        <p style={{marginTop:15}}>Tienes la lista vacía de canciones, ve y añade algunas! :D</p>
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
                  <td>
                    {state.AñadirCancionAListaId !== id && (
                        <CancionFavorita esFavorita={esFavorita} idCancion={id} />
                      )}

                      <AñadirCancionALista idCancion={id} />

                      {!esHomeOFavoritos && (
                        <i
                          className="fa fa-times"
                          onClick={() =>
                            dispatch({
                              type: 'borrarCancionDeLaLista',
                              idCancion: id
                            })
                          }
                        />
                      )}
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
    </div>
  )
}

export default Contenido