import React, {useState} from 'react'

export default function Input(props) {

    const [term, setTerm] = useState("")
    const handleSubmit = (event) => {
      event.preventDefault();
      props.parentCallback(term);
    }

    return (
        <form className="key-word" onSubmit={handleSubmit}>
            <input value={term} className="text-box" type="text" placeholder="Enter Your Giphy Term!" onChange={event => setTerm(event.target.value)} />
            <input className="submit-button" type={"submit"} value={"Submit"} />
        </form>

    )
}