interface VimeoPlayerProps {
  src: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VimeoPlayer({
  src,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
}: VimeoPlayerProps) {
  // Add Vimeo parameters to the URL
  const urlParams = new URLSearchParams();
  if (autoplay) urlParams.append("autoplay", "1");
  if (!controls) urlParams.append("controls", "0");
  if (loop) urlParams.append("loop", "1");
  if (muted) urlParams.append("muted", "1");
  if (autoplay) urlParams.append("autopause", "0"); // Don't pause when out of view

  const videoSrc = `${src}${src.includes("?") ? "&" : "?"}${urlParams.toString()}`;

  return (
    <div className="relative w-full my-8" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoSrc}
        title="vimeo-player"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    </div>
  );
}
