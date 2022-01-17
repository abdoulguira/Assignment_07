import React, {useState} from 'react'

export default function Input(props) {

    const handleSubmit = (event) => {
      event.preventDefault();
      props.setSearch("search")
    }


    return (
        <form className="key-word" type="form" onSubmit={handleSubmit}>
            <input
                value={props.term}
                className="text-box"
                type="text"
                placeholder="Enter Your Giphy Term!"
                onChange={props.setSearchTerm}
            />
            <input className="submit-button" type="submit" value="Submit" />
        </form>

    )
}