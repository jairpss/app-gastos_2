import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

const Background = () => {
    return ( 
        <>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path  
                    fillOpacity="1" 
                    d="M0,192L80,181.3C160,171,320,149,480,170.7C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">   
                </path>
            </Svg>
        </>
     );
}
 
export default Background;