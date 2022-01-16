import React, {useState} from 'react'
/*=== Imports ===*/
import Input from "./components/Input";
import RandomFilter from "./components/RandomFilter";
import GIFScreen from "./components/GIFScreen";
import TrendFilter from "./components/TrendFilter";

const {REACT_APP_API_KEY} = process.env;

export default function App() {

    const [term, setTerm] = useState("")
    const [trendOption, setTrendOption] = useState(false)
    const [randOption, setRandomOption] = useState(false)

    const termCallBack = (term) => {
        setTerm(term)
        setRandomOption(false)
        setTrendOption(false)
    }
    const randomCallBack = () => {
        setTerm("")
        setRandomOption(true)
        setTrendOption(false)
    }
    const trendCallback = () => {
        setTerm("")
        setRandomOption(true)
        setTrendOption(false)
    }
    return (
    <div>
        <div id="parameter-field">
            <Input parentCallback = {termCallBack}/>
            <RandomFilter parentCallback = {randomCallBack}/>
            <TrendFilter parentCallback = {trendCallback}/>
        </div>
        <div id="image-container">
            <GIFScreen trendOption={trendOption} term={term} randOption={randOption} apiKey={REACT_APP_API_KEY}/>
        </div>
    </div>
  )
}


