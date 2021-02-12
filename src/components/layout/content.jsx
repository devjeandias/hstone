import React from 'react'
import Card from './card'
var cardData = [
    {
        id: "1",
        name: "Card 1",
        classCard: "Mago",
        type: "Magia",
        attack: "10",
        defense: "5",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "2",
        name: "Card 2",
        classCard: "Mago",
        type: "Criatura",
        attack: "10",
        defense: "5",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "3",
        name: "Card 3",
        classCard: "Mago",
        type: "Magia",
        attack: "10",
        defense: "5",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "4",
        name: "Card 4",
        classCard: "Mago",
        type: "Magia",
        attack: "10",
        defense: "5",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    },
    {
        id: "5",
        name: "Card 5",
        classCard: "Mago",
        type: "Magia",
        attack: "10",
        defense: "5",
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }
]

export default props => {
    function getCardListItem() {
        return cardData.map(card => {
            return <Card
                    key={card.id}
                    name={card.name}
                    classCard={card.classCard}
                    type={card.type}
                    attack={card.attack}
                    defense={card.defense}
                    descriptions={card.descriptions}
                />
        })
    }

    return(getCardListItem())
}