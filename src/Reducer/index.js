import media from '../media.json'
import 'font-awesome/css/font-awesome.min.css'

const listaMusicaPredeterminada = 'home'
const volumenPorDefecto = 0.65

export const initialState = {
    media,
    AñadirCancionAListaId: '',
    actualListaMusica: listaMusicaPredeterminada,
    idCancionActual: '',
    tiempoActual: 0,
    duracion: 0,
    reproduccion: false,
    listasMusica: {
      home: new Set(media.ids),
      favoritos: new Set()
    },
    volumen: volumenPorDefecto
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'añadirListaMusica':
      return {
        ...state,
        listasMusica: { ...state.listasMusica, [action.listaMusica]: new Set() }
      }

    case 'añadirALista':
      return { ...state, AñadirCancionAListaId: action.idCancion }

    case 'abortarAñadirALista':
      return { ...state, AñadirCancionAListaId: '' }

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
      state.listasMusica[action.listaMusica].add(state.AñadirCancionAListaId)
      return { ...state, AñadirCancionAListaId: '' }

    case 'guardarLista':
      state.listasMusica[action.listaMusica].add(state.AñadirCancionAListaId)
      return { ...state, AñadirCancionAListaId: '' }

    case 'cancelarAñadirCancionALista':
      return { ...state, AñadirCancionAListaId: '' }

    case 'ponerTiempoActual':
      return { ...state, tiempoActual: action.time }

    case 'play':
      return {
        ...state,
        reproduccion: true,
        idCancionActual: action.idCancion || state.idCancionActual
      }

    case 'pausa':
      return { ...state, reproduccion: false }

    case 'ponerVolumen':
      return { ...state, volumen: parseFloat(action.volumen) }

    case 'ponerDuracion':
      return { ...state, duracion: action.duracion }
  }
    return state
  }
