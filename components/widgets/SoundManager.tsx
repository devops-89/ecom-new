"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SoundManager() {
  const pathname = usePathname();
  const linkAudioRef = useRef<HTMLAudioElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const isFirstLoad = useRef(true);
  useEffect(() => {
    linkAudioRef.current = new Audio("/sounds/link.mp3");
    hoverAudioRef.current = new Audio("/sounds/hover.mp3");
    linkAudioRef.current.preload = "auto";
    hoverAudioRef.current.preload = "auto";
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, [role='button']");

      if (clickable) {
        if (linkAudioRef.current) {
          linkAudioRef.current.currentTime = 0;
          linkAudioRef.current
            .play()
            .catch((err) => console.log("Audio play prevented:", err));
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const playHoverSound = () => {
      if (hoverAudioRef.current) {
        hoverAudioRef.current.currentTime = 0;
        hoverAudioRef.current
          .play()
          .catch((err) => console.log("Audio play prevented:", err));
      }
    };

    const timer = setTimeout(() => {
      playHoverSound();
    }, 4800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
