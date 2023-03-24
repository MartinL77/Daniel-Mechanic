import React from "react";
import styled from "styled-components";

export const CarText:React.FC = () => {
    return (
        <>
        <CarHeading><div>Your Car In</div><span>Immaculate Condition</span><div>Always</div></CarHeading>
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
    
    div {
        color: #000836;
    }
`






