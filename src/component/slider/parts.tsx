import styled from "styled-components";



export const Slider = styled.div`
  position: relative;
  overflow: hidden;
  border: solid black 2px;
  height: 98vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(to top right, #8b5cf6, #ec4899);
`
export const Item = styled.div<{ multiplier: number }>`
  /*Calculation*/
  min-height: 200px;
  height: calc(100% - 400px);
  width: 20%;
  position: absolute;
  background-color: #11ffee10;
  border: solid blue 2px; 
  overflow: hidden;
  padding: 10px;
  transition: transform 1s ease-out;
  transform: 
    translateX(${props => props.multiplier * 200}px) 
    scale(${props => props.multiplier >= 0 
      ?  1 - 0.2 * props.multiplier 
      : 1 + 0.2 * props.multiplier})
    ${props => props.multiplier 
      ? `perspective(20px) rotateY(${props.multiplier >= 0 
        ? -1 + 0.1 * props.multiplier
        : 1 + 0.1 * props.multiplier }deg)` 
      : ''};
`

export const Tool = styled.div`
  z-index: 1;
  border: solid blue 2px;
  height: 50px;
  width: 50px;
`


export const Title = styled.h1`
`
export const Text = styled.p`
`
