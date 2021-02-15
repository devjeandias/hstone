import './app.css'
import React, { Component } from 'react'
import Card from './layout/cards/card'
import Header from './layout/header/header'
import AddCard from './layout/addCard/addCard'

export default class App extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />

                <main id="main" className="main">
                    <div className="container">
                        <AddCard />
                        <Card />
                    </div>
                </main>

                <footer id="footer">
                    <div className="container"></div>
                </footer>
            </React.Fragment>
        )
    }
}