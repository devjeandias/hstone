import './app.css'
import React, { Component } from 'react'
import SearchResults from './layout/search-results/search-results'
import Header from './layout/header/header'
import Subheader from './layout/subheader/subheader'

export default class App extends Component {
    state = {
        searchResults: JSON.parse( localStorage.getItem('@heathstone/searchResults') )
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

    saveNewCard = (data) => {
        data.id = Math.floor(Math.random() * 999999)
        this.state.searchResults.push(data)

        this.setState({
            searchResults: this.state.searchResults
        })

        return localStorage.setItem('@heathstone/searchResults', JSON.stringify(this.state.searchResults))
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <main id="main" className="main">
                    <Subheader totalCards={this.state.searchResults.lenght} />
                    <div className="container">
                        <SearchResults
                            cards={ this.state.searchResults }
                            onSaveNewCard={ this.saveNewCard }
                            onSaveEdit={ this.saveCardEdit }
                        />
                    </div>
                </main>
            </React.Fragment>
        )
    }
}