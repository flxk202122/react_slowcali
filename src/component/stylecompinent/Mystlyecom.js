import styled from 'styled-components'
import React from 'react'

function Mystlyecom({ children }) {
    return (
        <BtnLi>{children}</BtnLi>
    )
}



export const BtnLi = styled.li`
padding-bottom: 3rem;

&+li {
  margin-left: 1rem;
}

a {
  font-weight: 400;
  position: relative;
  
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    display: none;
    border-radius: 100%;
    top: -0.5rem;
    left: 50%;
    transform: translate(0, -50%);
    background-color: #2625A1;
    opacity: 0;
  }

  &::after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 0;
    left: 0;
    bottom: -0.5rem;
    height: 1px;
    background-color: #2625A1;
    transition: 0.5s;
  }

  &:hover {
    color: #2625A1;

    &::before {
      display: inline-block;
      transition: 0.5s;
      opacity: 100;
    }

    &::after {
      display: inline-block;
      width: 100%;
    }
  }

  
}
`;



export default Mystlyecom