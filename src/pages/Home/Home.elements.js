import styled from 'styled-components/macro';

export const Loader = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    transition: 1s;
    background-color: ${({ loading }) => (loading ? '#000' : '')};
    pointer-events: none;
`