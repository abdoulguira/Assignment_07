import React from 'react'
/*=== Imports ===*/
import Input from "./components/Input";
import RandomFilter from "./components/RandomFilter";
import GIFScreen from "./components/GIFScreen";
import TrendFilter from "./components/TrendFilter";

const {REACT_APP_API_KEY} = process.env;
console.log(`${REACT_APP_API_KEY}`)
console.log("hello")

export default function App() {
  return (
    <div>
        <div id="parameter-field">
            <Input />
            <RandomFilter id="sort-field" />
            <TrendFilter id="filter-field" />
        </div>
        <div id="image-container">
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
        </div>
    </div>
  )
}


