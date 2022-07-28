import React from 'react';
import './BotonClear.css';

const BotonClear = (props) => {
    return (
        <div className='boton-clear' onClick={props.manejarClic}>
            {props.children}
        </div>
    )
}

export default BotonClear;