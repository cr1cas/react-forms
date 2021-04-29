import React from 'react';



import './tabla-vehiculo-principal.style.css';
import TablaVehiculo from '../tabla-vehiculo/tabla-vehiculo.comp';


const TablaVehiculoPrincipal = (props) => { 
    return (
        <div className="tabla-vehiculo-principal-container">
            
            <TablaVehiculo productsList={props.productsList}/>
            
        </div>
    );
}

export default TablaVehiculoPrincipal;