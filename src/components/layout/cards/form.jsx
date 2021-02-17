import React, { Component, Fragment } from 'react'
import './card.css'
import SelectOptions from '../selectOptions/selectOptions'

const cardType = ['Magia','Criatura']
const cardClass = ['Mago','Paladino','Caçador','Druida','Qualquer']

export default class Form extends Component {
    objState = {
        editing: false,
        id: '',
        name: '',
        class: '',
        type: '',
        attack: 0,
        defense: 0,
        description: ''
    }

    state = this.objState

    addNewCard() {
        this.setState({
            editing: true
        })
    }
    
    discardEdit() {
        this.setState( this.objState )
    }

    saveCard() {
        this.setState({
            editing: false
        })

        let dataCardSave = {
            name: this.state.name,
            class: [this.state.class],
            type: [this.state.type],
            attack: this.state.attack,
            defense: this.state.defense,
            description: this.state.description
        }

        return dataCardSave
    }

    render() {
        return (
            <Fragment>
                <div className={"card _addCard"} >
                        {   
                            this.state.editing ?
                                <div className="wrap">
                                    <input type="text" placeholder="nome" value={ this.state.name }
                                        onChange={ e => this.setState({ name: e.target.value }) } />

                                    <textarea placeholder="Descrição" value={this.state.description}
                                    onChange={ e => this.setState({ description: e.target.value }) } />
                                    <label> Ataque
                                        <input type="number" min="0"  max="10" value={ this.state.attack }
                                            onChange={ e => this.setState({ attack: e.target.value }) } />
                                    </label>

                                    <label> Defesa
                                        <input type="number" min="0"  max="10" value={ this.state.defense }
                                            onChange={ e => this.setState({ defense: e.target.value }) } />
                                    </label>

                                    <label> Tipo
                                        <SelectOptions hasSelected={this.state.type} selectData={cardType} actionChange={e =>  this.setState({ type: e.target.value })} />
                                    </label>

                                    <label> Classe
                                        <SelectOptions hasSelected={this.state.class} selectData={cardClass} actionChange={e =>  this.setState({ class: e.target.value })} />
                                    </label>
                                </div>
                            : <div className="addNewCard" onClick={() => {this.addNewCard()}}><span>+</span><p>nova carta</p></div>
                        }

                        {
                            this.state.editing ?
                                <div className="actions">
                                    <button className="save" onClick={() => this.props.onSave( this.saveCard() ) }>Salvar</button>
                                    <button className="discard" onClick={() => this.discardEdit() }>descartar</button>
                                </div>
                            : ''
                        }
                </div>
                {   
                    this.state.editing ?
                        <div className={"card _preview "+this.state.class.toLowerCase()} >
                            <span className="preview">prévia</span>
                            <div className="wrap">
                                <h2 className="card-name">{this.state.name}</h2>
                                <div className="card-description"><p>{this.state.description}</p></div>
                                <span className="card-attack">A <sup> {this.state.attack} </sup></span>
                                <span className="card-defense">D <sup> {this.state.defense} </sup></span>
                                <span className="card-type" style={{display: 'block'}}><strong>Tipo: </strong>{this.state.type}</span>
                                <span className="card-class" style={{display: 'block'}}> <strong>Classe: </strong> {this.state.class}</span>
                            </div>
                        </div>
                    : ""
                }
            </Fragment>
        )
    }
}