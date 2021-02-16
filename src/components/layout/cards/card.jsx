import React, { Component, Fragment } from 'react'
import './card.css'
import SelectOptions from '../selectOptions/selectOptions'

const cardType = ['Magia','Criatura']
const cardClass = ['Mago','Paladino','Caçador','Druida','Qualquer']

export default class Card extends Component {
    objState = {
        editing: false,
        id: this.props.card.id,
        name: this.props.card.name,
        class: this.props.card.class[0],
        type: this.props.card.type[0],
        attack: this.props.card.attack,
        defense: this.props.card.defense,
        description: this.props.card.description
    }

    state = this.objState

    activeEdit() {
        this.setState({
            editing: true
        })
    }
    
    discardEdit() {
        this.setState( this.objState )
    }

    saveEdit() {
        this.setState({
            editing: false
        })

        let dataCardSave = {
            id: this.state.id,
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
            <div className={"card "+this.state.class.toLowerCase()} >
                <div className="wrap">
                    {/* name */}
                    {   
                        this.state.editing ?
                            <input type="text" value={ this.state.name }
                                onChange={ e => this.setState({ name: e.target.value }) } />
                        :   <h2 className="card-name">{this.state.name}</h2>
                    }
                         
                    {/* description */}
                    {
                        this.state.editing ?
                            <textarea value={this.state.description}
                                onChange={ e => this.setState({ description: e.target.value }) } />
                        :   <div className="card-description"><p>{this.state.description}</p></div>
                    }

                    {/* attack */}
                    {   
                        this.state.editing ?
                            <label> Ataque
                                <input type="number" min="0"  max="10" value={ this.state.attack }
                                    onChange={ e => this.setState({ attack: e.target.value }) } />
                            </label>
                        :   <span className="card-attack">A <sup> {this.state.attack} </sup></span>
                    }
                    
                    {/* defense */}
                    {   
                        this.state.editing ?
                            <label> Defesa
                                <input type="number" min="0"  max="10" value={ this.state.defense }
                                    onChange={ e => this.setState({ defense: e.target.value }) } />
                            </label>
                        :   <span className="card-defense">D <sup> {this.state.defense} </sup></span>
                    }
    
                    {/* type */}
                    {
                        this.state.editing ?
                            <label> Tipo
                                <SelectOptions hasSelected={this.state.type} selectData={cardType} actionChange={e =>  this.setState({ type: e.target.value })} />
                            </label>
                        : <span className="card-type" style={{display:"none" }}>{this.state.type}</span>
                    }

                    {/* class */}
                    {
                        this.state.editing ?
                            <label>
                                <SelectOptions hasSelected={this.state.class} selectData={cardClass} actionChange={e =>  this.setState({ class: e.target.value })} />
                            </label>
                        : <span className="card-class" style={{display:"none" }}>{this.state.class}</span>
                    }
                </div>
    
                <div className="actions">
                    { this.state.editing ?
                        <Fragment>
                            <button className="save" onClick={() => this.props.onSave( this.saveEdit() ) }>Salvar</button>
                            <button className="discard" onClick={() => this.discardEdit() }>descartar</button>
                        </Fragment> :
                        <Fragment>
                            <button className="delete">Deletar</button>
                            <button className="edit" onClick={() => this.activeEdit()}>Editar</button>
                        </Fragment> }
                </div>
            </div>
        )
    }
}