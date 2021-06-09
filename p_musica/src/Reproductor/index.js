import React, {useReducer, createContext} from 'react'

import BarraLateral from './BarraLateral'
import Contenido from './Contenido'
import BarraMusica from './BarraMusica'
import media from '../media.json'

export const StoreContext = createContext(null)

const listaMusicaPredeterminada = 'home'

const initialState = {
  actualListaMusica: listaMusicaPredeterminada,
  media,
  AñadirCancionAListaId: '',
  listasMusica: {
    home: new Set(media.ids),
    favoritos: new Set()
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'añadirListaMusica':
      return {
        ...state,
        listasMusica: { ...state.listasMusica, [action.listaMusica]: new Set() }
      }
    case 'seleccionarListaMusica':
      return { ...state, actualListaMusica: action.listaMusica }
    case 'añadirFavorito':
      state.listasMusica.favoritos.add(action.idCancion)
      return {...state}
    case 'borrarFavorito':
      state.listasMusica.favoritos.delete(action.idCancion)
      return {...state}
    case 'ponerCancionALista':
      return { ...state, AñadirCancionAListaId: action.idCancion }
    case 'añadirCancionALista':
      state.playlists[action.playlist].add(state.AñadirCancionAListaId)
      return { ...state, AñadirCancionAListaId: '' }
    case 'cancelarAñadirCancionALista':
      return { ...state, AñadirCancionAListaId: '' }
    case 'borrarCancionDeLaLista':
      state.playlists[state.actualListaMusica].delete(action.idCancion)
      return { ...state }
  }

  return state
}

const ReproductorMusica = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      <div className="ReproductorMusica">
        <span className="lateral"><BarraLateral/></span>
        <span className="musica"><BarraMusica/></span>
        <span className="conteni"><Contenido/></span>
      </div>
    </StoreContext.Provider>
  )
}

export default ReproductorMusica