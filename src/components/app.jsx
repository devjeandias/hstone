import React from 'react'
import Header from './layout/header'
import Content from './layout/content'

export default props => {
    return(
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
}