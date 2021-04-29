import React from 'react';

import './marca-vehiculo.style.css';

const MarcaVehiculo = (props) => {
    return (
        <div className="marca-vehiculo-container">
            
            {
                /*todo lo que se ingrese en estas llaves corresponde a codigo*/
                props.vehiculo.id === 0
                
                /**operador ternario */ 
                ?/**si el stock es cero entonces            if true*/
                    <span className="product-without-stock">{props.product.marca}</span>

                : /**si no es cero, entonces                 else*/
                    <span>{props.product.marca}</span>

            }
            
            
        </div>
    );
}

export default MarcaVehiculo;