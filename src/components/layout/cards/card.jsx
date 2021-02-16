import React from 'react'
import './card.css'

import cacador from './img/cacador.png'
import druida from './img/druida.png'
import paladino from './img/paladino.png'
import mago from './img/mago.png'
import qualquer from './img/qualquer.png'

export default (props) => {
    let card = props.card
    
    let bgCard = function(props) {
        let styleCard = {}
            styleCard.backgroundSize = "cover"

        switch(props) {
            case 'Mago':
                styleCard.backgroundImage= 'url('+mago+')'
                break;
            case 'Druida':
                styleCard.backgroundImage= 'url('+druida+')'
                break;
            case 'Caçador':
                styleCard.backgroundImage= 'url('+cacador+')'
                break;
            case 'Paladino':
                styleCard.backgroundImage= 'url('+paladino+')'
                break;
            default:
                styleCard.backgroundImage= 'url('+qualquer+')'
                break;
        }

        return styleCard
    }

    return (
        <div className="card" style={bgCard(card.class[0])}>
            <div className="wrap">
                <h2 className="card-name">{card.name}</h2>

                <div className="card-description">
                    <p>{card.description}</p>
                </div>

                <span className="card-attack">A <sup> {card.attack} </sup></span>
                <span className="card-defense">D <sup> {card.defense} </sup></span>

                <span className="card-type" style={{display:"none" }}>{card.type[0]}</span>
                <span className="card-class" style={{display:"none" }}>{card.class[0]}</span>
            </div>

            <div className="actions">
                <button className="delete">Deletar</button>
                <button className="edit">Editar</button>
            </div>
        </div>
    )
}