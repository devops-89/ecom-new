"use client";
import LeftBar from "@/components/widgets/LeftBar";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import heroBgGif from "@/public/images/hero-bg.gif";
import mobBannerPng from "@/public/images/mob-banner.png";
import smallMobBannerPng from "@/public/images/small-screen-mob-banner.png";

export default function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!stripRef.current) return;
      const x = (window.innerWidth / 2 - e.clientX) / 12;
      const y = (window.innerHeight / 2 - e.clientY) / 12;
      stripRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          background: "rgb(19, 19, 19)",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <LeftBar />
        <Box
          className="center-image"
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "35vh", md: "40vh", lg: "60vh", xl: "90vh" },
              height: "auto",
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image src={heroBgGif} alt="animated-bg" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </Box>
          <Box
            ref={stripRef}
            data-aos="zoom-in"
            sx={{
              width: { xs: "90%", md: "85%", lg: "70%", xl: "80%" },
              maxWidth: { xs: "280px", md: "320px", lg: "600px", xl: "1000px" },
              position: "relative",
              zIndex: 2,
              transition: "transform 0.15s ease-out",
              willChange: "transform",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Image src={mobBannerPng} alt="banner" style={{ width: "100%", height: "auto" }} />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Image src={smallMobBannerPng} alt="banner" style={{ width: "100%", height: "auto" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
