import React from 'react'
import './App2.css'
import LogoReact from './assets/react.svg';
import TareaFormulario from './Componentes/TareaFormulario';
import Tarea from './Componentes/Tarea';
import ListaDeTareas from './Componentes/ListaDeTareas';

function App2() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="d-flex flex-column align-items-center mt-5">
                    <img src={LogoReact} alt="" width='100px' />
                    <h1 className='mt-4'>Lista de tareas</h1>
                </div>
            </div>
            <div className="row">
                <ListaDeTareas/>
            </div>
        </div>
    </div>
  )
}

export default App2
