import React, {useState} from 'react';

export const Primercomponente = () => {
    let web = "carlitosdou.es";

    const [nombre, setNombre] = useState("Carlitos")

    let cursos = [
        "Master en python",
        "Master en Javascrips",
        "Master en MySql"
    ]

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }
 
  return (
    <div>
        <h1>Primer Componente</h1> 
        <p>Este es el primer Componente de React...</p>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el nombre' />

        <button onClick={ e => cambiarNombre("CARLITOS MAIDANA")}>Cambiar</button>

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
