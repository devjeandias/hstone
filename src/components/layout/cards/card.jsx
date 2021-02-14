import React from 'react'
import './card.css'

export default function() {
    return (
        <div className="card" key="card.id">
            <figure className="card-img">
                <img src="" alt="M" />
            </figure>

            <h2 className="card-name">card.name</h2>

            <div className="card-description">
                <p>card.description</p>
            </div>

            <span className="card-attack">card.attack</span>
            <span className="card-defense">card.defense</span>

            <span className="card-type">card.type</span>
            <span className="card-class">card.class</span>
        </div>
    )
}