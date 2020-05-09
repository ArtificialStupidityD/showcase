import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import CountryList from "./CountryList";

function App() {
    const [countries, setCountries] = useState([])
    const [newName, setNewName] = useState('')
    //

    const handleNewName = (event) => {

        setNewName(event.target.value)
        axios
            .get(`http://restcountries.eu/rest/v2/name/${newName}`)
            .then(response => {
                console.log('Promise fulfilled')
                setCountries(response.data)
            })
    }

    const handleClick=(event)=> {

    }

    return (
        <div>
            Find Countries <input value={newName} onChange={handleNewName}/>
            <CountryList countries={countries}/>
            <button value={countries} onClick={handleClick}>Select country</button>



        </div>
    );
}

export default App;
