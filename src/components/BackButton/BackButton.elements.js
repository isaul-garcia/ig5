import styled from 'styled-components/macro';

export const BackWrapper = styled.div`
    padding: 5px 10px 5px 11px;
    margin-left: ${({ reduce }) => (reduce ? '0' : '5px')};
    margin-bottom: ${({ reduce }) => (reduce ? '10px' : '0')};
    margin-top: -6px;
    border-radius: 12px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    outline-offset: -1px;
    background-color: #2d2d2d;
    position: absolute;
    display: inline-block;
    z-index: 204;
    position: sticky;
    top: 24px;

    &:hover {
        background-color: #fe3d46;
    }

    @media screen and (max-width: 991px) {
        display: none;
    }
`