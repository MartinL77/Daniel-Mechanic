import React from "react";

import { useRouter } from 'next/router'
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
    const router = useRouter()
    return (
        <>
            <NavContainer>
                <Hamburger>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <NavWrapper>
                    <NavLogo>
                        <Link href={"./"}>
                            <ImageComponent />
                        </Link>
                    </NavLogo>
                    <MenuWrapper>
                        <Menu>
                            <MenuLink><Link href={"/"}><h3>Home</h3></Link></MenuLink>
                            <MenuLink><Link href={"#services"}><h3>Services</h3></Link></MenuLink>
                            <MenuLink><Link href={"#about"}><h3>About</h3></Link></MenuLink>
                            <MenuLink><Link href={"#contact"}><h3>Contact</h3></Link></MenuLink>
                        </Menu>
                        <MenuLinkLast><Link href={""}><h3>Request A Quote</h3></Link></MenuLinkLast>
                    </MenuWrapper>
                </NavWrapper>
            </NavContainer>
        </>
    )
};

// ORGANISE BELOW STYLES TO CORRECT FILES

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`

const NavWrapper = styled.div`
    display: flex;
    width: 100%;
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`

const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10px;
    margin-top: 20px;

    span {
        height: 2px;
        width: 25px;
        background-color: blue;
        margin-bottom: 4px;
        border-radius: 5px;
    }
`

{/* <div className="" >
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Request A Quote</li>
                </div> */}