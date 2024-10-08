import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, WEIGHTS} from '../../constants';
import {formatPrice, isNewShoe, pluralize} from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
                      slug, name, imageSrc, price, salePrice, releaseDate, numOfColors,
                  }) => {
    // There are 3 variants possible, based on the props:
    //   - new-release
    //   - on-sale
    //   - default
    //
    // Any shoe released in the last month will be considered
    // `new-release`. Any shoe with a `salePrice` will be
    // on-sale. In theory, it is possible for a shoe to be
    // both on-sale and new-release, but in this case, `on-sale`
    // will triumph and be the variant used.

    const variant = typeof salePrice === 'number' ? 'on-sale' : isNewShoe(releaseDate) ? 'new-release' : 'default'
    const isOnSale = variant === 'on-sale';
    const isJustReleased = variant === 'new-release';
    const bgColor = isOnSale ? COLORS.primary : COLORS.secondary;

    return (<Link href={`/shoe/${slug}`}>
        <Wrapper>
            <ImageWrapper>
                <Image alt="" src={imageSrc}/>
                {(isOnSale || isJustReleased) && <Flag style={{
                    '--bgColor': bgColor
                }}>
                    {isJustReleased ? 'Just Released!' : 'Sale'}
                </Flag>}
            </ImageWrapper>
            <Spacer size={12}/>
            <Row>
                <Name>{name}</Name>
                <Price style={{
                    '--color': isOnSale ? COLORS.gray[700] : '',
                    '--text-decoration': isOnSale ? 'line-through' : '',
                }}>
                    {formatPrice(price)}
                </Price>
            </Row>
            <Row>
                <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
                {variant === 'on-sale' && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
            </Row>
        </Wrapper>
    </Link>);
};

const Flag = styled.div`
    position: absolute;
    right: -4px;
    top: 12px;
    background-color: var(--bgColor);
    height: 32px;
    padding: 0 10px;
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.bold};
    line-height: 32px; /* dev'essere alta tanto quanto il font-size */
    color: ${COLORS.white};
    border-radius: 2px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

const Wrapper = styled.article`
    //width: 344px; /*Con la grid*/
    //height: 370px; /*Con la grid*/
    margin-bottom: auto;
    position: relative;
`;

const ImageWrapper = styled.div`
    padding-right: 4px;
`;

const Image = styled.img`
    width: 100%;
    display: block;
    //height: 312px; /*Con la grid*/
    border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
`;

const Name = styled.h3`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
    line-height: 1.174rem;
`;

const Price = styled.span`
    color: var(--color);
    text-decoration: var(--text-decoration);
    font-weight: ${WEIGHTS.normal};
    line-height: 1rem;
`;

const ColorInfo = styled.p`
    line-height: 1.174rem;
    color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.primary};
`;

export default ShoeCard;
