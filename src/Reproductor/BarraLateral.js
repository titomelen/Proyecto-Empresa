import React, { useState, useRef, useContext } from 'react'
import logo from '../img/nerakk.png'
import Modal from './Modal'
import Toast from './Toast'
import {StoreContext} from './index'

const BarraLateral = () => {
    const [barraLateralState, setState] = useState({
        modal: false,
        toast: ''
    })

    const {state, dispatch} = useContext(StoreContext)

    const listaMusica = Object.keys(state.listasMusica)
    const listaReferencia = useRef(null)

    const añadirListaMusica = e => {
        e.preventDefault()
        const list = listaReferencia.current.value

        dispatch({type: 'añadirListaMusica', listaMusica: list})

        setState({
            ...barraLateralState,
            modal: false,
            toast: 'Tu lista ha sido creada con éxito!'
        })
    }

    const handleModal = () => setState({...barraLateralState, modal: !barraLateralState.modal})

    return (
        <ul className="BarraLateral">
            <img src={logo} />

            <li className="biblioteca">Biblioteca</li>

            {listaMusica.map(lista => (
                <li
                    key={lista}
                    className={lista === state.actualListaMusica ? 'activo' : ''}
                    onClick={() => {
                        dispatch({type: 'seleccionarListaMusica', listaMusica: lista})
                    }}>
                    {lista}
                </li>
            ))}

            <Modal
                show={barraLateralState.modal}
                close={handleModal}>
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

            <Toast toast={barraLateralState.toast} close={() => {
                setState({ ...barraLateralState, toast: '' })
            }}>
            </Toast>

            <li className="crearLista"
                onClick={handleModal}>
                Crear Lista
            </li>

        </ul>
    )
}

export default BarraLateral