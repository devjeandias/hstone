import React from 'react'

export default (props) => {
    let selectItens = props.selectData.map(function(v, k) {
        return <option key={k}>{v}</option>
    })

    return <select name={props.name} id={props.id}>{selectItens}</select>
}