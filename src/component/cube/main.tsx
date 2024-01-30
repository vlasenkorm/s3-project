import React from "react";
import styled from "styled-components";
import { Back, Bottom, Container, Cube, Front, Left, Right, Top } from "./parts";

const CubeComponent: React.FC = () => {
    return (
        <Container>
            <Cube>
                <Front />
                <Back />
                <Left />
                <Right />
                <Top />
                <Bottom />
            </Cube>
        </Container>
    );
};


export default CubeComponent;