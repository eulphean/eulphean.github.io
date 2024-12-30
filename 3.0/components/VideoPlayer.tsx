type VideoPlayerProps = {
    src: string;
    style: string
}

export default function VideoPlayer (props: VideoPlayerProps) {
    return (
        <video 
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