import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header style={{lineHeight: '1.028 rem'}}>
            <SuperHeader/>

            <MainHeader>
                {/*<Side>*/}
                    <Logo/>
                {/*</Side>*/}
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                {/*<Side/>*/}
            </MainHeader>
        </header>
    );
};

const MainHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 0 32px;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid ${COLORS.gray[300]};
`;


/*const Side = styled.div`
    flex:1; /!* = flex-grow:1; flex-basis:0*!/
`;*/

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    line-height: 1.321rem;
    width: 248px;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;
