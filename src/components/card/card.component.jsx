import React from 'react'
import './card.styles.css'
export function Card(props) {
    return (
        <div className = 'card-container'>
            <img alt = 'monster' src = {`https://robohash.org/${props.fruit.id}?set=set2&size=180x180`}/>
            <h2> {props.fruit.name} </h2>
            <p> {props.fruit.email}</p>
        </div>
    )
}