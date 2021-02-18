import React from 'react' 
import styled from 'styled-components'


const HeaderStyle = styled.h1`
color: #15418C;


&:hover{
    text-shadow: 0px 40px 2px #FC3D21;
    transition: all .35s ease-in-out;
}
transition: all .25s ease-in-out;
`
//! JSX is like HTML

function Header() {
return (
<HeaderStyle>NASA photo of the day</HeaderStyle>
);

    //! parentses holds logic or expressions for javascript
}
//! default imports the header only 
export default Header;