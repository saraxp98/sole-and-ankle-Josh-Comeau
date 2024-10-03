import React from 'react';
import styled from 'styled-components';

import {COLORS, WEIGHTS} from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import Spacer from "../Spacer";

const SuperHeader = () => {
    return (
        <Wrapper>
            <MarketingMessage>
                Free shipping on domestic orders over $75!
            </MarketingMessage>

            <SearchInput/>

            <Spacer size={24}/>
            <HelpLink href="/help">Help</HelpLink>
            <Spacer size={24}/>

            <UnstyledButton>
                <Icon id="shopping-bag" size={24} strokeWidth={1}/>
            </UnstyledButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    padding-inline: 32px;
    
    font-size: 0.875rem;
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[300]};
    background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
    color: ${COLORS.white};
    margin-right: auto;
`;

const HelpLink = styled.a`
    color: inherit;
    text-decoration: none;
    outline-offset: 2px;
    max-width: 32px;

    &:not(:focus-visible) {
        outline: none;
    }
`;

export default SuperHeader;
