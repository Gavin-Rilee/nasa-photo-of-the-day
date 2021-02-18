
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './componets/TopPage';
import Main from './componets/Main';
import axios from 'axios';
function App() {
 

  const [theData, setTheData] = useState({})
    //! deconstructing from an array 

    function getData() {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=rlfY8FaB1bQU5rZiEtfrUsGFJf7He7ic6LSDiatS'
        )
        .then((res) => {
            setTheData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

useEffect(getData, [])

return (
  <div className="App">
  <Header/>
  <Main imgSrc = {theData.url} imgAlt = {theData.title}/>
  </div>
);


}
//!  Capitals are the difference between react and HTML in file names 
export default App;

