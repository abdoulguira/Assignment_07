import React, {useState} from 'react'
/*=== Imports ===*/
import Input from "./components/Input";
import RandomFilter from "./components/RandomFilter";
import GIFScreen from "./components/GIFScreen";
import TrendFilter from "./components/TrendFilter";

export default function App() {

    const[searchTerm, setSearchTerm] = React.useState("")

    const[request, setRequest] = React.useState("")


    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleRequests = (requestType) => {
        setRequest(requestType)
    }
    return (
        <div>
            <div id="parameter-field">
                <Input term = {searchTerm} setSearchTerm = {handleChange} setSearch = {handleRequests} />
                <RandomFilter setShowRandom = {handleRequests}/>
                <TrendFilter setShowTrending = {handleRequests} />
            </div>
            <div id="image-container">
                {request &&
                    <GIFScreen
                        showGifs={request}
                        term={searchTerm}
                    />}

            </div>
        </div>
    )
}


