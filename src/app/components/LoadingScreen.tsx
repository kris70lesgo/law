"use client";

import { useEffect, useRef, useState } from "react";

export default function LoadingScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let fallbackTimer: number;
    let removeTimer: number;

    document.body.style.overflow = "hidden";
    void videoRef.current?.play();

    const removeLoader = () => {
      setIsLeaving(true);

      removeTimer = window.setTimeout(() => {
        document.body.style.overflow = "";
        setIsVisible(false);
      }, 500);
    };

    fallbackTimer = window.setTimeout(removeLoader, 2500);

    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center bg-black transition-opacity duration-500 ${
        isLeaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading"
      aria-live="polite"
    >
      <video
        ref={videoRef}
        className="relative z-10 w-[min(86vw,707px)] max-h-[70vh] object-contain"
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedData={(event) => {
          event.currentTarget.currentTime = 0;
          void event.currentTarget.play();
        }}
        onEnded={() => {
          setIsLeaving(true);

          window.setTimeout(() => {
            document.body.style.overflow = "";
            setIsVisible(false);
          }, 500);
        }}
      />
    </div>
  );
}
