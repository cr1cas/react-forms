import React from 'react';
import TablaVehiculoPrincipal from './components/tabla-vehiculo-principal/tabla-vehiculo-principal.comp.jsx'


const PaginaVehiculos = () => {

    let productsList =[//objeto llamado productsList
        
            {
                
                marca:'Motos',
                vehiculo:[
                    {
                        id:"c1p1",
                        marca:"bajaj"
                    },
                    {
                        id:"c1p2",
                        marca:"kawasaki"
                    },
                    {
                        id:"c1p2",
                        marca:"yamaha"
                    }
                ]
            },
            {
                marca:'Carros',
                vehiculo:[
                    {
                        id:"c2p1",
                        marca:"Renault"
                    },
                    {
                        id:"c2p2",
                        marca:"Toyota"
                    },
                    {
                        id:"c2p3",
                        marca:"BMW"
                    }
                ]
            },


            {
                marca:'Cuatrimotos',
                vehiculo:[
                    {
                        id:"c3p1",
                        marca:"Honda"
                    },
                    {
                        id:"c3p2",
                        marca:"suzuki"
                    },
                    {
                        id:"c3p3",
                        marca:"Polaris"
                    }
                ]
            }
        ];

    return (
        <>
            <TablaVehiculoPrincipal productsList={productsList}/>
            

        </>
    );
}

export default PaginaVehiculos;