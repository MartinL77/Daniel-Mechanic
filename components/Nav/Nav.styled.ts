import React from "react";
import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    background: #f1f1f1;
    border-bottom: solid 1px lightgray;

    /* @media screen and (max-width:920px) {
        width: max-content;
    } */
`;

export const NavLogo = styled.div`
`;

export const Menu = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

export const MenuLink = styled.div`
cursor: pointer;
text-align: center;
transition: all 0.07s ease-in;
margin-left: 70px;

h3 {
    font-size: medium;
    font-weight: 500;
    color: gray;

    &:hover {
    color: black;
    }
}

    a {
    text-decoration: none;
    }

    @media screen and (max-width: 940px) {
    margin-left: 40px;
    }

    @media screen and (max-width: 750px) {
    margin-left: 0px;
    }
`;

export const MenuLinkLast = styled(MenuLink)`
    margin-right: 100px;
    margin-left: 0px;
    padding: 10px;
    border: solid 1px black;

    h3 {
    color: black;
    }

    @media screen and (max-width: 750px) {
        margin-right: 0px;
    }
`;

