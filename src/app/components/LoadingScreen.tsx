"use client";

import { useEffect, useRef, useState } from "react";

export default function LoadingScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    const minimumDuration = 4200;
    let removeOverlay: number;

    document.body.style.overflow = "hidden";
    void videoRef.current?.play();

    const finishLoading = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(minimumDuration - elapsed, 0);

      removeOverlay = window.setTimeout(() => {
        setIsLeaving(true);

        window.setTimeout(() => {
          document.body.style.overflow = "";
          setIsVisible(false);
        }, 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(removeOverlay);
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
        loop
        preload="auto"
        onLoadedData={(event) => {
          event.currentTarget.currentTime = 0;
          void event.currentTarget.play();
        }}
      />
    </div>
  );
}
