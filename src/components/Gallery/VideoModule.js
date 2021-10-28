import React, {useState} from 'react'
import { Waypoint } from 'react-waypoint'
import ReactPlayer from 'react-player'
import {
    VModule,
    VContainer,
    VWrapper,
    } from './Gallery.elements';

const VideoModule = ({giveWidth, giveHeight, customColor, videoURL, fill, pad}) => {
    let [shouldPlay, updatePlayState] = useState(false);
  
    let handleEnterViewport = function() {
      updatePlayState(true);
    }
    let handleExitViewport = function() {
      updatePlayState(false);
    }

    return (
        <>
            <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>   
                <VModule giveWidth={giveWidth} giveHeight={giveHeight} pad={pad}>
                    <VContainer customColor={customColor}>
                        <VWrapper fill={fill} pad={pad} giveHeight={giveHeight}>                        
                            <ReactPlayer
                            playing={shouldPlay} loop={true} muted={true} width={'100%'} height={'100%'}
                            url={videoURL}
                            playsinline
                            />
                        </VWrapper>
                    </VContainer>
                </VModule>                        
            </Waypoint>
        </>
    )
}

export default VideoModule;