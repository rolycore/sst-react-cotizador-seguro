import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import shalomlogo from "../mutimedia/images/logo.jpg";
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo} {/* Aquí puedes usar la imagen */}
    <img src={shalomlogo} alt="Shalom Logo" style={{ maxWidth: "25%", height: "auto" }} /></TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;