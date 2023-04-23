import  { Component, useRef} from 'react'

export default function Video()
{
    const vidRef = useRef();
 
    const handlePlayVideo = () => {
        vidRef.current.play();
      }
    
    
      const handlePlayPause = () => {
        vidRef.current.pause();
      }
    


    return (
        <>
          <video ref={vidRef} width="100%" height="100%">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>

        <button onClick={handlePlayVideo}>Play</button>
        <button onClick={handlePlayPause}>Stop</button>
        </>
     
        
  
    );
}