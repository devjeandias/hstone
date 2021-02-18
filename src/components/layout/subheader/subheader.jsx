import React from 'react'
import './subheader.css'

export default function(props) {
    return(
        <div className="main--header container">
            <h1 className="title">Cartas</h1>
            <span className="subtitle">
                { props.totalCards > 0 ? "Total de cartas:"+props.totalCards: "Nenhuma carta encontrada " }
                <br/>
                { props.clearSearch[1] ? <button className="btnClear" onClick={props.clearSearch[0]}>limpar filtro</button> : "" }
            </span>
        </div>
    )
}