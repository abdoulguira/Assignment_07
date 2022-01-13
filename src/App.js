import React from 'react'
/*=== Imports ===*/
import Input from "./components/Input";
import Sort from "./components/Sort";
import GIFScreen from "./components/GIFScreen";
import Filter from "./components/Filter";



export default function App() {
  return (
    <div>
        <div id="parameter-field">
            <Input />
            <Sort id="sort-field" />
            <Filter id="filter-field" />
        </div>
        <div id="image-container">
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
            <GIFScreen />
        </div>
    </div>
  )
}


