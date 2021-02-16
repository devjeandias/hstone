import React from 'react'
import Card from '../cards/card'
import './search-results.css'

export default (props) => {
    let searchResult = props.cards.map((val, ind) => {
        return (<Card key={"card-"+val.id} card={ val } />)
    })

    return(
        <div className="search-results">
            {searchResult}
        </div>
    )
}