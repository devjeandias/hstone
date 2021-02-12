import React from 'react'
import Filter from './filter'
var Logo = "Logo"

export default props => {
    return(
        <header>
            <div className="content">
                <img src={Logo} alt={Logo} />
                <Filter />
            </div>
        </header>
    )
}