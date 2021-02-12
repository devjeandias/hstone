import React from 'react'

export default props => {
    return (
        <div className="card" data-id={props.id}>
            <img src="https://via.placeholder.com/150" alt=""/>

            <h2 className="card-name"> {props.name} </h2>

            <small className="card-class"> {props.classCard} </small>
            <small className="card-type"> {props.type} </small>

            <span className="card-attack"> {props.attack} </span>
            <span className="card-defense"> {props.defense} </span>

            <div className="card-descriptions">
                <p> {props.descriptions} </p>
            </div>
        </div>
    )
}