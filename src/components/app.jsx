import './app.css'
import React, { Component } from 'react'
import SearchResults from './layout/search-results/search-results'
import Header from './layout/header/header'
import Form from './layout/form/form'
import Subheader from './layout/subheader/subheader'

export default class App extends Component {
    state = {
        searchResults: JSON.parse( localStorage.getItem('@heathstone/searchResults') )
    }

    hasSearchResults() {
        return this.state.searchResults ? true : false
    }

    saveCardEdit = (data) => {
        let cardEdit = this.state.searchResults

        cardEdit.map( (v, k) => {
            if(data.id === cardEdit[k].id) {
                cardEdit[k] = data
            }
            return localStorage.setItem('@heathstone/searchResults', JSON.stringify(cardEdit))
        })
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <main id="main" className="main">
                    <Subheader totalCards={this.state.searchResults.lenght} />
                    <div className="container">
                        { this.hasSearchResults() ? <SearchResults cards={ this.state.searchResults } onSaveEdit={ this.saveCardEdit } /> : <Form /> }
                    </div>
                </main>
            </React.Fragment>
        )
    }
}