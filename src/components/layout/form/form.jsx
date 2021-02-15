import React from 'react'
import './form.css'
import SelectOptions from '../selectOptions/selectOptions'

const cardType = ['Magia','Criatura']
const cardClass = ['Mago','Paladino','Caçador','Druida','Qualquer']

export default function() {
    return(
        <form className="incluir-card">
            <div className="row">
                <label htmlFor="card-name">Nome da carta</label>
                <input type="text" name="card-name" id="card-name" />
            </div>

            <div className="row inline-block">
                <label htmlFor="card-attack">Ataque</label>
                <input type="number" max="10" min="0" name="card-attack" id="card-attack" />
            </div>

            <div className="row inline-block">
                <label htmlFor="card-defense">Defesa</label>
                <input type="number" max="10" min="0" name="card-defense" id="card-defense" />
            </div>

            <div className="row inline-block">
                <label htmlFor="card-type">Tipo de carta</label>
                    <SelectOptions selectData={cardType} name="card-type" id="card-type" />
            </div>

            <div className="row inline-block">
                <label htmlFor="card-class">Classe da carta</label>
                    <SelectOptions selectData={cardClass} name="card-class" id="card-class" />
            </div>

            <div className="row">
                <label htmlFor="card-description">Descrição</label>
                <textarea name="card-description" id="card-description"></textarea>
            </div>

            <input type="hidden" id="card-id" />
        </form>
    )
}