import './app.css'
import React, { Component } from 'react'
// import Card from './layout/cards/card'
import Header from './layout/header/header'
import AddCard from './layout/addCard/addCard'
import Form from './layout/form/form'
import Subheader from './layout/subheader/subheader'

// let hasCard = true

export default class App extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />

                <main id="main" className="main">
                    <Subheader />

                    <div className="container">
                        {/* <Card /> */}
                        <Form />

                        {/* { hasCard ? <Card /> : <Form /> }  */}
                    </div>
                    
                    <AddCard />
                </main>
            </React.Fragment>
        )
    }
}