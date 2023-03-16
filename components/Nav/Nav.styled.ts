import React from "react";
import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    background: #f1f1f1;
`;

export const NavLogo = styled.div`
`;

export const Menu = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const MenuLink = styled.div`
cursor: pointer;
text-align: center;
padding-left: 70px;

a {
    text-decoration: none;
}
`;

export const MenuLinkLast = styled(MenuLink)`
margin-right: 5px;
`;

