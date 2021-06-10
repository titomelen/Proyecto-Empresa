import React, {useReducer, createContext, useRef, useEffect} from 'react'
import {initialState, reducer} from '../Reducer'
import 'font-awesome/css/font-awesome.min.css'

import BarraLateral from './BarraLateral'
import Contenido from './Contenido'
import BarraMusica from './BarraMusica'

export const StoreContext = createContext(null)

const ReproductorMusica = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const audioRef = useRef()

  useEffect(() => {
    if (state.reproduccion) {
      audioRef.current.load()
      audioRef.current.play()
    } else audioRef.current.pause()
  }, [state.reproduccion, state.idCancionActual])

  useEffect(() => {
    audioRef.current.volumen = state.volumen
  }, [state.volumen])

  const cancion = state.media[state.idCancionActual]

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      <div className="ReproductorMusica">
        <span className="lateral"><BarraLateral/></span>
        <span className="musica"><BarraMusica/></span>
        <span className="conteni"><Contenido/></span>

        <audio
          ref={audioRef}
          src={
            cancion && cancion.titulo
              ? `../media/${cancion.titulo} - ${cancion.artista}.mp3`
              : ''
          }
          onLoadedMetadata={() =>
            dispatch({
              type: 'ponerDuracion',
              duracion: audioRef.current.duracion
            })
          }
          onTimeUpdate={e =>
            dispatch({ type: 'ponerTiempoActual', time: e.target.tiempoActual })
          }
        />
      </div>
    </StoreContext.Provider>
  )
}

export default ReproductorMusica