interface VimeoPlayerProps {
  src: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  inline?: boolean;
  aspect?: "wide" | "auto";
}

export default function VimeoPlayer({
  src,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  title,
  subtitle,
  centered = false,
  inline = false,
  aspect = "wide",
}: VimeoPlayerProps) {
  // Add Vimeo parameters to the URL
  const urlParams = new URLSearchParams();
  if (autoplay) urlParams.append("autoplay", "1");
  if (!controls) urlParams.append("controls", "0");
  if (loop) urlParams.append("loop", "1");
  if (muted) urlParams.append("muted", "1");
  if (autoplay) urlParams.append("autopause", "0"); // Don't pause when out of view

  const videoSrc = `${src}${src.includes("?") ? "&" : "?"}${urlParams.toString()}`;

  const player =
    aspect === "auto" ? (
      <iframe
        className={`block ${inline ? "" : "rounded-lg"}`}
        src={videoSrc}
        title={title || "vimeo-player"}
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    ) : (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className={`absolute top-0 left-0 w-full h-full ${inline ? "" : "rounded-lg"}`}
          src={videoSrc}
          title={title || "vimeo-player"}
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      </div>
    );

  if (inline) {
    return player;
  }

  return (
    <div className="my-8">
      {player}
      {(title || subtitle) && (
        <div
          className={`flex items-start ${centered ? "justify-center text-center" : "justify-between"} mt-3`}
        >
          <div>
            {title && (
              <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
            )}
            {subtitle && (
              <p className="text-xs text-gray-400 tracking-wide mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
