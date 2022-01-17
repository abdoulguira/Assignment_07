import React from 'react'
import GIFScreen from "./GIFScreen";

export default function RandomFilter(props) {
    const rand = () => {
        props.parentCallback();
    }
    return (
        <button className="random-button" onClick={rand}>RANDOM!!</button>
    )
}