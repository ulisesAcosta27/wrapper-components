import React from 'react'
import './Imagen.css'

const Imagen = ({ img, type }) => {
    return (
        <ul className='logo-fares'>
            {
                type === 'logo' ?
                    <div className='logo-container'>
                        <img src={img} />
                        <p>Fares</p>
                    </div> :
                    <img src={img} />

            }
        </ul>
    )
}

export default Imagen