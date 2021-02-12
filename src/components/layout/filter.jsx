import React from 'react'

export default props => {
    return(
        <form className="filter">
            <label className="filter-title">Busca</label>
            <input className="filter-input" />
            <button className="filter-btn">Buscar</button>
        </form>
    )
}