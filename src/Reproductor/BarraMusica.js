import React, {useContext, useCallback} from 'react'
import { StoreContext } from './index'
import 'font-awesome/css/font-awesome.min.css'


const formatTime = inputSeconds => {
  let seconds = Math.floor(inputSeconds % 60)
  if (seconds < 10) seconds = `0${seconds}`

  const minutes = Math.floor(inputSeconds / 60)

  return `${minutes}:${seconds}`
}

const handleProgress = (tiempoActual, duracion) => 600 * (tiempoActual / duracion)


const BarraMusica = () => {
  const { state, dispatch } = useContext(StoreContext)
  const cancion = state.media[state.idCancionActual]

    
  const ponerVolumen = useCallback(e =>
    dispatch({ type: 'ponerVolumen', volumen: e.target.value })
  )

  if (!cancion) {
    return <div className="musica"/>
  }
  


  const playOrPause = () =>
    state.reproduccion ? dispatch({ type: 'pausa' }) : dispatch({ type: 'play' })

  return (
    <div className="musica">
      <div className="left">
        {cancion && (
          <>
            <div>{cancion.titulo}</div>

            <div className="artist">{cancion.artista}</div>
          </>
        )}
      </div>

      <div className="middle">
        <div className="play-pause-circle" onClick={playOrPause}>
          <i
            className={`fa fa-${state.reproduccion ? 'pausa' : 'play'}`}
            style={{ transform: state.reproduccion ? '' : 'translateX(1.5px)' }}
          />
        </div>

        <div style={{ marginTop: 2.5 }}>
          <span>{formatTime(Math.floor(state.tiempoActual))}</span>

          <div className="progress-container">
            <div
              className="bar"
              style={{
                width: handleProgress(state.tiempoActual, state.duracion)
              }}
            />
          </div>

          <span>{formatTime(state.duracion)}</span>
        </div>
      </div>

      <div className="right">
        <i className="fa fa-volume-up" />

        <input
          type="range"
          min="0"
          max="1"
          value={state.volumen}
          step="0.01"
          style={{ marginLeft: 10 }}
          onChange={ponerVolumen}
        />
      </div>
    </div>
  )
}


export default BarraMusica