import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonHeader = styled(Link)`
    background: ${(props) => props.primario ? '#005CE6' : '#1A1B25'}; 
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Manrope', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    letter-spacing: 1px;
    font-size: 1.25rem; /* 20px */
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    
    
    &:hover {
        background: ${(props) => props.primario ? '#0C6DFE' : '#262626'};
    }

    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`;

export default ButtonHeader;