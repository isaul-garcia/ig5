import styled from 'styled-components/macro';
import { rad } from '../../globalStyles';


///BANNER
//Use for the WEBGL shader
export const BannerWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: calc(100% + 10vh);
    margin-left: -30vw;
    margin-top: -10vh;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    z-index: 202;

    //Size adjustment for small DESKTOP displays
    @media screen and (min-width: 991px) {
    }
    
    //Size adjustment for bigger DESKTOP displays
    @media screen and (min-width: 1300px) {
    }

    //Mobile static banner size
    @media screen and (max-width: 991px) {
        width: 100%;
        margin-left: 0;
        border-radius: 10px 10px 0px 0px;
        margin-top: 0;        
        height: 100%;
        border-radius: ${rad};
    }
`