import React, {useState} from 'react'
import GIFScreen from "./GIFScreen";

export default function Input() {

    const [term, setTerm] = useState("")
    const handleSubmit = (event) => {
      event.preventDefault();
    }

    return (
        <form className="key-word" onSubmit={handleSubmit}>
            <input value={term} className="text-box" type="text" placeholder="Enter Your Giphy Term!" onChange={event => setTerm(event.target.value)} />
            <input className="submit-button" type={"submit"} value={"Submit"} />
        </form>
        
    )
}