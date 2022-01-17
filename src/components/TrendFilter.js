import React from 'react'

export default function TrendFilter(props) {

    return (
        <button
            className="trend-button"
            onClick={() => props.setShowTrending("trending")}
        >
            Trendy Gifs!</button>
    )
}