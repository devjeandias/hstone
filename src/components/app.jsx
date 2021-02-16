import './app.css'
import React, { Component } from 'react'
import SearchResults from './layout/search-results/search-results'
import Header from './layout/header/header'
import AddCard from './layout/addCard/addCard'
import Form from './layout/form/form'
import Subheader from './layout/subheader/subheader'

export default class App extends Component {
    state = {
        searchResults: JSON.parse( localStorage.getItem('@heathstone/searchResults') )
    }

    hasSearchResults = () => {
        return this.state.searchResults ? true : false
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <main id="main" className="main">
                    <Subheader totalCards={this.state.searchResults.lenght} />
                    <div className="container">
                        { this.hasSearchResults() ? <SearchResults cards={ this.state.searchResults } /> : <Form /> }
                    </div>
                    <AddCard />
                </main>
            </React.Fragment>
        )
    }
}