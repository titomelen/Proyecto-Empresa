import React, { useState, useRef } from 'react'
import logo from '../img/nerakk.png'
import Modal from './Modal'
import Toast from './Toast'

const BarraLateral = () => {
    const [state, setState] = useState({
        pistaActual: '',
        listaMusica: {
            home: new Set(),
            favoritos: new Set()
        },
        toast: ''
    })

    const listaMusica = Object.keys(state.listaMusica)
    const listaReferencia = useRef(null)

    const añadirListaMusica = e => {
        e.preventDefault()
        const list = listaReferencia.current.value

        setState({
            ...state,
            modal: false,
            listaMusica: { ...state.listaMusica, [list]: new Set() },
            toast: 'Tu lista ha sido creada con éxito!'
        })
    }

    return (
        <ul className="BarraLateral">
            <img src={logo} />

            <li className="biblioteca">Biblioteca</li>

            {listaMusica.map(lista => (
                <li
                    key={lista}
                    className={lista === state.pistaActual ? 'active' : ''}
                    onClick={() => {
                        setState({ ...state, pistaActual: lista })
                    }}>
                    {lista}
                </li>
            ))}

            <Modal
                show={state.modal}
                close={() => {
                    setState({ ...state, modal: false })
                }}>
                <form onSubmit={añadirListaMusica}>
                    <div className="titulo">Crea tu nueva lista</div>

                    <div className="formulario">
                        <input
                            type="text"
                            placeholder="Nombrala"
                            required
                            ref={listaReferencia}
                        />
                        <br />
                        <button className="boton" type="submit">Crear</button><br /><br /><br />
                    </div>
                </form>
            </Modal>

            <Toast toast={state.toast} close={() => {
                setState({ ...state, toast: '' })
            }}>
            </Toast>

            <li className="crearLista"
                onClick={() => {
                    setState({ ...state, modal: true })
                }}
            >Crear Lista
            </li>

        </ul>
    )
}

export default BarraLateral