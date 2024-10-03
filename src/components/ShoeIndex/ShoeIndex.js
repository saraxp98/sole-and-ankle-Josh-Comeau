import React from 'react';
import styled from 'styled-components/macro';

import {WEIGHTS} from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({sortId, setSortId}) => {
    return (<>
            <Header>
                <Breadcrumbs>
                    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
                </Breadcrumbs>
                <Title>Running</Title>
                <Select label="Sort" value={sortId} onChange={(ev) => setSortId(ev.target.value)}>
                    <option value="newest">Newest Releases</option>
                    <option value="price">Price</option>
                </Select>
            </Header>
            <Spacer size={34}/>
            <Wrapper>
                <MainColumn>
                    <ShoeGrid/>
                </MainColumn>
                <LeftColumn>
                    {/*<Spacer size={42}/>*/}
                    <ShoeSidebar/>
                </LeftColumn>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 32px;
    //background-color: crimson;
    width: auto;
    //    TODO Align left!!!!
`;

const LeftColumn = styled.div`
    flex-basis: 248px;
    //background-color: aquamarine;
`;

const MainColumn = styled.div`
    flex-direction: column;
`;

const Header = styled.header`
    left: 32px;
    right: 32px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: ${WEIGHTS.medium};
    margin-right: auto;
    margin-left: 32px;
`;

export default ShoeIndex;
