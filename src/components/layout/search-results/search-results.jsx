import React from 'react'
import Card from '../cards/card'
import Form from '../cards/form'
import './search-results.css'

export default (props) => {
    return(
        <div className="search-results">
            {props.cards.map((val) => {
                return (<Card key={"card-"+val.id} card={ val } onSave={ props.onSaveEdit } onDelete={ props.onDelCard } />)
            })}
            <Form key={Math.random()} onSave={ props.onSaveNewCard } />
        </div>
    )
}