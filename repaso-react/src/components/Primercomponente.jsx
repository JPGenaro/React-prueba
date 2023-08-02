import React from 'react'

export const Primercomponente = () => {

    let nombre = "Carlitos";
    let web = "carlitosdou.es";
 
  return (
    <div>
        <h1>Primer Componente</h1>
        <p>Este es el primer Componente de React...</p>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi web es: {web}</p>
    </div>
  )
}
