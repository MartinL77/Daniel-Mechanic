import React from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { NavContainer } from "./Nav.styled";
import { NavLogo } from "./Nav.styled";
import { ImageComponent } from "../image";
import { Menu } from "./Nav.styled";
import { MenuLink } from "./Nav.styled";
import { MenuLinkLast } from "./Nav.styled";


export const Nav: React.FC = () => {
    return (
        <>
            <NavContainer>
            
                <NavLogo>
                    <Link href={"./"}>
                        <ImageComponent />
                    </Link>
                </NavLogo>
                <MenuWrapper>
                <Menu>
                    <MenuLink><Link href={"./"}><h2>Home</h2></Link></MenuLink>
                    <MenuLink><Link href={""}><h2>Services</h2></Link></MenuLink>
                    <MenuLink><Link href={""}><h2>About</h2></Link></MenuLink>
                    <MenuLink><Link href={""}><h2>Contact</h2></Link></MenuLink>
                </Menu>
                <MenuLinkLast><Link href={""}><h2>Request A Quote</h2></Link></MenuLinkLast>
                </MenuWrapper>
            </NavContainer>
        </>
    )
}

const MenuWrapper = styled.div`
    background: lightblue;
    display: flex;
    white-space: nowrap;
    width: 100%;
`

{/* <div className="" >
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Request A Quote</li>
                </div> */}