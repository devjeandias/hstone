import logo from './img/logo.png'
import React from 'react'
import Filter from '../filter/filter'
import './header.css'

export default function(props) {
    return (
        <header id="header" className="header">
            <a href="/" className="brand-logo"><img src={logo} alt="HearthStone" /></a>
            <Filter onSearch={ props.onSearch } />
        </header>
    )
}