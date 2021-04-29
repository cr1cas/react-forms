import React, { useState } from 'react';
import ClaseVehiculo from '../clase-vehiculo/clase-vehiculo.comp.jsx';
import ProductRow from '../marca-vehiculo/marca-vehiculo.comp';

import './tabla-vehiculo.style.css';

const TablaVehiculo = (props) => {
    const [nombreClase, setNombreClase] = useState('clase1');
    const [marca, setMarca] = useState('');
    
    

const addProduct = (event) => {
    console.log('marca' +  marca);
    //console.log('price' +  price);
}

    return (
        <div className="tabla-vehiculo-container">
            <div>

            
            {props.productsList.map((nombreClase, index) =>  {
                return (
                    <React.Fragment key = {nombreClase.ClaseVehiculo}>
                    <ClaseVehiculo nombreClase={nombreClase.ClaseVehiculo}/>
                    {nombreClase.products.map((product, indexProduct)=> {
                        return(
                            <ProductRow
                                key={product.ProductRow}
                                marca={marca}
                            />//como estoy mapeando necesito el atributo key

                        ); 
                    })}
                    </React.Fragment>
                );
            })} 
            </div>
            <div className="products-form">
                <form>
                    <table>
                        <tbody>

                        <tr>
                            <td>
                                nombreClase
                            </td>
                            
                        </tr>
                       <tr>
                           <td>
                                <select>
                                    value={nombreClase}
                                    onChange={(event)=>
                                        setNombreClase(event.target.value)
                                        }
                                    <option value="clase1">Motos</option>
                                    <option value="clase2">Carros</option>
                                    <option value="clase3">Cuatrimotos</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                        </tr>
                        <tr>
                            <td><input 
                                type="text"
                                value={marca}
                                onChange={(event)=>{
                                    setMarca(event.target.value)
                                }}
                                /> 
                            </td>
                        </tr>

                        
                        <tr>
                            <br/>
                            <button
                                onClick={addProduct}
                            >
                            Add product

                            </button>
                            
                        </tr>
                        </tbody>                
                    </table>
    
                </form>

            </div>
            
        </div>
        
    );
    
}

export default TablaVehiculo;