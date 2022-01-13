import React from 'react'

export default function Input() {
    return (
        <form className="key-word">
            <input className="text-box" type="text" placeholder="Enter Your Giphy Term!" ></input>
            <button className="submit-button">Submit</button>
        </form>
    )
}