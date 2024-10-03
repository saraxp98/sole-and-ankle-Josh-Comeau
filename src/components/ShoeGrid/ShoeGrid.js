import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
    return (
        <Wrapper>
            {SHOES.map((shoe) => (
                <ShoeWrapper key={shoe.slug}>
                    <ShoeCard {...shoe} />
                </ShoeWrapper>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
    /*display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(370px, 370px);
    column-gap: 32px;
    row-gap: 64px;*/
`;

const ShoeWrapper= styled.div`
    margin: 16px;
    width: 275px;
    flex-grow: 1;
    //flex:1; /* non fa aumentare le dimensioni delle cards! Le fa diminuire! */
`

export default ShoeGrid;
