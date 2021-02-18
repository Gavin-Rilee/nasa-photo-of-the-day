
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Components/TopPage';
import Main from './Components/Main';
import axios from 'axios';
import styled from 'styled-components'

const Styledbackground = styled.div`
background: #15418C;
background: -moz-linear-gradient(-45deg, #15418C 0%, #FDE5E2 50%, #FC3D21 100%);
background: -webkit-linear-gradient(-45deg, #15418C 0%, #FDE5E2 50%, #FC3D21 100%);
background: linear-gradient(135deg, #15418C 0%, #FDE5E2 50%, #FC3D21 100%);

`

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
  <Styledbackground className="App">
  <Header/>
  <Main imgSrc = {theData.url} imgAlt = {theData.title} media = {theData.media_type} imgexp = {theData.explanation} copyright = {theData.copyright} date = {theData.date}/>
  </Styledbackground>
);


}
//!  Capitals are the difference between react and HTML in file names 
export default App;

