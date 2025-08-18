import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
    src: string;
    style: string;
    onLoadedData?: () => void;
}

export default function VideoPlayer (props: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Use useEffect to handle the video loading state
    // This ensures that the onLoadedData callback is called when the video is ready
    // useEffect(() => {
    //     const video = videoRef.current;
    //     if (!video || !props.onLoadedData) return;

    //     const handleLoaded = () => {
    //         props.onLoadedData?.();
    //     };

    //     // Add multiple event listeners to catch different loading states
    //     //video.addEventListener('loadeddata', handleLoaded);
    //     // video.addEventListener('canplay', handleLoaded);
    //     // video.addEventListener('play', handleLoaded);
        
    //     // If video is already loaded when component mounts
    //     if (video.readyState >= 2) {
    //         handleLoaded();
    //     }

    //     return () => {
    //         //video.removeEventListener('loadeddata', handleLoaded);
    //         // video.removeEventListener('canplay', handleLoaded);
    //         // video.removeEventListener('play', handleLoaded);
    //     };
    // }, [props.onLoadedData]);

    return (
        <video 
            ref={videoRef}
            className={props.style}
            autoPlay 
            muted 
            preload="auto" 
            loop 
            playsInline
        >
          <source src={props.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
}