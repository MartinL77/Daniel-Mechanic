import React from "react";
import styled from "styled-components";

export const CarText:React.FC = () => {
    return (
        <>
        <CarHeading>Your Car In <span>Immaculate Condition</span> Always</CarHeading>
        </>
    )
}

const CarHeading = styled.div`
    font-size: 90px;
    font-weight: 600;
    width: 500px;

    span {
        color: #1E90FF;
    }

`






