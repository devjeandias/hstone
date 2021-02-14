import React from 'react'
import './filter.css'

export default function() {
    return(
        <div id="filter">
            <div className="container">
                <form className="form">
                    <label className="label" htmlFor="filter--search">Buscar</label>
                    <input type="text" name="filter--search" id="filter--search" class="filter--search" />
                    <div className="filter--search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M58.22,11.86a30.74,30.74,0,0,0-24.54,49.3L12.44,81.92a4.79,4.79,0,0,0,3.35,8.22,4.74,4.74,0,0,0,3.35-1.37L40.57,67.83a30.77,30.77,0,1,0,17.65-56Zm0,52a21.2,21.2,0,1,1,21.19-21.2A21.22,21.22,0,0,1,58.22,63.84Z"></path></svg>
                    </div>
                </form>
            </div>
        </div>
    )
}