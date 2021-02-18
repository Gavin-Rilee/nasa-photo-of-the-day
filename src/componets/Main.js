import React, { useState, useEffect } from 'react'
import axios from 'axios';

//!  use effect is like a time control tells when to use stuff


function Main(props) {
    return (
        <div>
            <img src= {props.imgSrc}  alt= {props.imgAlt}/>
        </div>
    );
}


export default Main;