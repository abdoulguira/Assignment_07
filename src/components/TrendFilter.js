import React from 'react'

export default function TrendFilter(props) {
    const trend = () => {
        props.parentCallback();
    }
    return (
        <button className="trend-button" onClick={trend}>Trendy Gifs!</button>
    )
}