import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1300px;
  /*perspective-origin: 820px -220px;*/
`
export const Cube = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: cubeRotate 10s linear infinite;
  @keyframes cubeRotate {
    from { transform: rotateY(0deg) rotateX(720deg) rotateZ(0deg); }
    to { transform: rotateY(360deg) rotateX(0deg) rotateZ(360deg); }
  }
`
export const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border: 2px solid white;
`
export const Front = styled(Side)`
  background-color: #d50000;
  transform: translateZ(100px);
`
export const Back = styled(Side)`
  background-color: #aa00ff;
  transform: translateZ(-100px);
  /*transform: rotateY(180deg) translateZ(100px);*/
`
export const Left = styled(Side)`
  background-color: #304ffe;
  transform: rotateY(90deg) translateZ(100px);
`
export const Right = styled(Side)`
  background-color: #0091ea;
  transform: rotateY(-90deg) translateZ(100px);
`
export const Top = styled(Side)`
  background-color: #00bfa5;
  transform: rotateX(90deg) translateZ(100px);
`
export const Bottom = styled(Side)`
  background-color: #64dd17;
  transform: rotateX(-90deg) translateZ(100px);
`
