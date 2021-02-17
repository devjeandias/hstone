import './app.css'
import React, { Component } from 'react'
import SearchResults from './layout/search-results/search-results'
import Header from './layout/header/header'
import Subheader from './layout/subheader/subheader'

export default class App extends Component {
    
    state = {
        searchResults: JSON.parse( localStorage.getItem('@heathstone/searchResults') )
    }

    setData = (data) => {
        return localStorage.setItem('@heathstone/searchResults', data )
    }

    removeElement(a, index) {
        let newArray = [...a]
        newArray.splice(index, 1)
        return newArray;
    }

    saveNewCard = (data) => {
        data.id = Math.floor(Math.random() * 999999)
        this.state.searchResults.push(data)

        this.setState({
            searchResults: this.state.searchResults
        })

        return this.setData( JSON.stringify(this.state.searchResults) )
    }

    saveCardEdit = (data) => {
        let cardEdit = this.state.searchResults

        cardEdit.map( (v, k) => {
            if(data.id === cardEdit[k].id) {
                cardEdit[k] = data
            }
            return this.setData( JSON.stringify(cardEdit) )
        })
    }

    delCard = ( id, name ) => {

        let cards = this.state.searchResults,
            alertDel = confirm("Deletar "+name+"?")

        if(alertDel) {
            cards.map( (v, k) => {
                if( id === v.id ) {
                    cards = this.removeElement(cards, k)
                }
                return this.setData( JSON.stringify(cards) )
            })
    
            this.setState({
                searchResults: cards
            })
        }
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <main id="main" className="main">
                    <Subheader totalCards={ this.state.searchResults.length } />
                    <div className="container">
                        <SearchResults
                            cards={ this.state.searchResults }
                            onSaveNewCard={ this.saveNewCard }
                            onSaveEdit={ this.saveCardEdit }
                            onDelCard={ this.delCard }
                        />
                    </div>
                </main>
            </React.Fragment>
        )
    }
}