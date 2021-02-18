// componente criado apenas para incluir os promeiros cartões
export default function() {
    let thisArray = [{
        id: "1",
        name: "Card 1",
        class: ['Paladino'],
        type: ['Magia'],
        attack: "8",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }, {
        id: "2",
        name: "Card 2",
        class: ["Mago"],
        type: ["Criatura"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }, {
        id: "3",
        name: "Card 3",
        class: ["Caçador"],
        type: ["Magia"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }, {
        id: "4",
        name: "Card 4",
        class: ["Qualquer"],
        type: ["Magia"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }, {
        id: "5",
        name: "Card 5",
        class: ["Druida"],
        type: ["Magia"],
        attack: "10",
        defense: "5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis?"
    }]

    const carregarDados = function() {

        if( !localStorage.getItem('@heathstone/searchResults') ) {
            localStorage.setItem('@heathstone/searchResults', JSON.stringify(thisArray))
            window.location.href = window.location.href
        }
    }

    return (
        carregarDados()
    )
}