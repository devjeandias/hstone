import './app.css'
import React, { Component } from 'react'
import SearchResults from './layout/search-results/search-results'
import Header from './layout/header/header'
import AddCard from './layout/addCard/addCard'
import Form from './layout/form/form'
import Subheader from './layout/subheader/subheader'


let valueCards = [
    {
        id: "1",
        name: "Card 1",
        class: ["Paladino"],
        type: ["Magia"],
        attack: "8",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "2",
        name: "Card 2",
        class: ["Mago"],
        type: ["Criatura"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "3",
        name: "Card 3",
        class: ["Caçador"],
        type: ["Magia"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "4",
        name: "Card 4",
        class: ["Qualquer"],
        type: ["Magia"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "5",
        name: "Card 5",
        class: ["Druida"],
        type: ["Magia"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }
]

export default class App extends Component {
    
    state = {
        cards: valueCards
    }

    render() {
        return(
            <React.Fragment>
                <Header />

                <main id="main" className="main">
                    <Subheader />
                    {console.log(localStorage.getItem('@heathstone/cards'))}

                    <div className="container">
                        { this.state.cards.length >= 0 ? <SearchResults cards={ this.state.cards } /> : <Form /> }
                    </div>
                    
                    <AddCard />
                </main>
            </React.Fragment>
        )
    }
}