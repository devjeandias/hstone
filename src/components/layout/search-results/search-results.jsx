import React from 'react'
import Card from '../cards/card'
import Form from '../cards/form'
import './search-results.css'

export default (props) => {
    let searchResult = props.cards.map((val, ind) => {
        return (<Card key={"card-"+val.id} card={ val } onSave={ props.onSaveEdit } />)
    })

    return(
        <div className="search-results">
            {searchResult}
            <Form />
        </div>
    )
}