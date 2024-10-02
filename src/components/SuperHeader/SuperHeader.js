import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
    return (
        <Wrapper>
            <MarketingMessage>
                Free shipping on domestic orders over $75!
            </MarketingMessage>
            <RightWrapper>
                <SearchInput/>
                <HelpLink href="/help">Help</HelpLink>
                <UnstyledButton>
                    <Icon id="shopping-bag" size={24} strokeWidth={1}/>
                </UnstyledButton>
            </RightWrapper>
        </Wrapper>
    );
};

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`

const Wrapper = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${COLORS.gray[300]};
    background-color: ${COLORS.gray[900]};
    padding-inline: 32px;
    height: 40px;
    display: flex;
    align-items: center;
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
