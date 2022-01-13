import React, {useState} from 'react'

export default function GIFScreen() {
    //const [gifs , setGifs] = useState(placeholderValForInitialGifs)
    return (
        <div>
            <img className={"gifs"} src={require("./images/placeholder.jpg")} alt={"this is some random info"}/>
        </div>
    )
}