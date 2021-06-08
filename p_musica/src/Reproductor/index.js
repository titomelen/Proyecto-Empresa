import React from 'react'

import BarraLateral from './BarraLateral'
import Contenido from './Contenido'
import BarraMusica from './BarraMusica'

const ReproductorMusica = () => {
  return (
    <div className="ReproductorMusica">
        <span className="lateral"><BarraLateral/></span>
        <span className="musica"><BarraMusica/></span>
        <span className="conteni"><Contenido/></span>
    </div>
  )
}

export default ReproductorMusica