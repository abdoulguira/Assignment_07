import React from 'react'

export default function RandomFilter(props) {



    return (
        <button
            className="random-button"
            onClick={() => {
                props.setShowRandom("random")
                props.setRerender()
            }}>RANDOM!!</button>
    )
}