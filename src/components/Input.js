import React, {useState} from 'react'

export default function Input(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setSearch("search")
    }


    return (
        <form className="key-word" type="form" onChange={handleSubmit}>
            <input
                value={props.term}
                className="text-box"
                type="text"
                placeholder="Enter Your Giphy Term!"
                onChange={props.setSearchTerm}
            />
        </form>

    )
}