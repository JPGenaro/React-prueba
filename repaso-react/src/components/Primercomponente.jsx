import React from 'react'

export const Primercomponente = () => {

    let nombre = "Carlitos";
    let web = "carlitosdou.es";

    let cursos = [
        "Master en python",
        "Master en Javascrips",
        "Master en MySql"
    ]

    const cambiarNombre = (nuevoNombre) => {
        nombre = nuevoNombre;
    }
 
  return (
    <div>
        <h1>Primer Componente</h1>
        <p>Este es el primer Componente de React...</p>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi web es: {web}</p>

        <button onClick={ e => cambiarNombre("CARLITOS")}></button>

        <h2>Cursos: </h2>
        <ul>
            {
                cursos.map( (curso, indice) => {
                    return (<li key={indice}>
                            {curso}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
