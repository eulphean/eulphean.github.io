"use client";

import { useState, useEffect, useRef } from "react";
import Player from "@vimeo/player";

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
  aspect?: "wide" | "manual";
  width?: number;
  height?: number;
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
  width,
  height,
}: VimeoPlayerProps) {
  // Add Vimeo parameters to the URL
  const urlParams = new URLSearchParams();
  if (autoplay) urlParams.append("autoplay", "1");
  urlParams.append("controls", controls ? "1" : "0");
  if (loop) urlParams.append("loop", "1");
  if (muted) urlParams.append("muted", "1");
  if (autoplay) urlParams.append("autopause", "0"); // Don't pause when out of view

  const videoSrc = `${src}${src.includes("?") ? "&" : "?"}${urlParams.toString()}`;

  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);

    player.ready().then(() => {
      setIsLoading(false);
    });

    return () => {
      player.destroy();
    };
  }, [videoSrc]);

  const loadingOverlay = isLoading && (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg z-10">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      <p className="text-xs text-gray-400 mt-3 tracking-wide">
        Loading Some Amazing Stuff
      </p>
    </div>
  );

  const player =
    aspect === "manual" && width && height ? (
      <div
        className="relative h-full"
        style={{ aspectRatio: `${width}/${height}` }}
      >
        {loadingOverlay}
        <iframe
          ref={iframeRef}
          className={`absolute top-0 left-0 w-full h-full ${inline ? "" : "rounded-lg"}`}
          src={videoSrc}
          title={title || "vimeo-player"}
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
        <a
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label="Open on Vimeo"
        />
      </div>
    ) : (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {loadingOverlay}
        <iframe
          ref={iframeRef}
          className={`absolute top-0 left-0 w-full h-full ${inline ? "" : "rounded-lg"}`}
          src={videoSrc}
          title={title || "vimeo-player"}
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
        <a
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label="Open on Vimeo"
        />
      </div>
    );

  if (inline) {
    return (
      <div>
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
