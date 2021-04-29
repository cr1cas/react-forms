import React from 'react';

import './clase-vehiculo.style.css';

const ClaseVehiculo = (props) => {
    return (
        <div className="clase-vehiculo-container">
            {props.nombreClase}
        </div>
    );
}

export default ClaseVehiculo;