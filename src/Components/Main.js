import React from 'react'
import styled from 'styled-components'
const StyleImage = styled.img`
border-radius:20px;
`






//!  use effect is like a time control tells when to use stuff
const StyledP = styled.p`
color:midnightblue;
font-family: "Comic Sans MS", cursive, sans-serif;
font-weight:700;
&:hover{
transform:scale(.8);
}

`
const StyleButton = styled.button `
font-family: "Arial Black", Gadget, sans-serif;
font-size: 20px;

&:hover{
-moz-transform: rotate(343deg);
-webkit-transform: rotate(343deg);
-o-transform: rotate(343deg);
-ms-transform: rotate(343deg);
transform: rotate(343deg);
}
`


const StyleHtwo = styled.h2`
color:mistyrose;

`

function Main(props) {
    return (
        <div>
            <StyleHtwo>{props.imgAlt}</StyleHtwo>
           {props.media === 'image' ? (<StyleImage src= {props.imgSrc}  alt= {props.imgAlt}/>) : (<iframe src = {props.imgSrc} title = {props.imgAlt}/>)}
           <StyledP>{props.imgexp}</StyledP>
           <StyleButton>{props.copyright}</StyleButton>
           <footer>{props.date}</footer>
        </div>
       
    );
}


export default Main;