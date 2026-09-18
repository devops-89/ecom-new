"use client";
import logoImg from "@/public/images/logo.png";
import { theme } from "@/utils/enum";
import { Box, GlobalStyles, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_ICONS = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/onlinechannelsalessolution",
  },
  { icon: FaTwitter, href: "https://x.com/theecomg" },
  { icon: FaInstagram, href: "https://www.instagram.com/onlinechannelsales/" },
  { icon: FaLinkedinIn, href: "https://in.linkedin.com/company/theecomguru" },
  { icon: FaPinterest, href: "https://in.pinterest.com/theecomguru_/" },
];

const globalStyles = (
  <GlobalStyles
    styles={{
      "@keyframes scroll": {
        "0%": { height: "80px" },
        "100%": { height: "120px" },
      },
      "@keyframes slide": {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
      },
    }}
  />
);

export default function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [yellow, setYellow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const clickSound = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    let frameId: number;
    let currentX = 0,
      currentY = 0;
    let targetX = 0,
      targetY = 0;
    let currentScale = 1,
      targetScale = 1;
    const speed = 0.1;

    const animate = () => {
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;
      currentScale += (targetScale - currentScale) * speed;
      menu.style.transform = `translate(${currentX}px,${currentY}px) scale(${currentScale})`;
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = menu.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < 200) {
        targetX = distanceX * 0.18;
        targetY = distanceY * 0.18;
        targetScale = 1.35;
      } else {
        targetX = 0;
        targetY = 0;
        targetScale = 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const openMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setTimeout(() => {
      setMenuOpen(true);
      setYellow(false);
    }, 450);
  };

  const closeMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setMenuOpen(false);
    setTimeout(() => setYellow(false), 450);
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    clickSound.current?.play();
    closeMenu();
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  };

  return (
    <>
      {globalStyles}
      <audio ref={clickSound} src="/sounds/link.mp3" />

      <Box
        component="header"
        sx={{
          position: menuOpen ? "fixed" : "absolute",
          top: { xs: "15px", md: "20px" },
          left: { xs: "20px", lg: "40px" },
          right: { xs: "20px", lg: "40px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: menuOpen ? 3300 : 3000,
        }}
      >
        <Link
          href="/"
          style={{
            opacity: menuOpen ? 0 : 1,
            pointerEvents: menuOpen ? "none" : "auto",
            transition: "opacity 0.3s",
            lineHeight: 0,
          }}
        >
          <Box sx={{ width: { xs: 180, md: 230 }, height: "auto" }}>
            <Image
              src={logoImg}
              alt="logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              transition: "opacity 0.3s ease",
            }}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </Typography>

          <Box
            component="button"
            ref={menuRef}
            onClick={menuOpen ? closeMenu : openMenu}
            sx={{
              background: menuOpen ? "white" : "transparent",
              border: menuOpen
                ? "1px solid white"
                : "1px solid rgba(255,255,255,0.25)",
              color: "#000",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              width: { xs: "38px", md: "34px" },
              height: { xs: "38px", md: "34px" },
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              transition:
                "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), background 0.45s ease, border-color 0.45s ease",
            }}
          >
            <Box
              component="span"
              sx={{
                position: "absolute",
                width: "16px",
                height: "2px",
                background: menuOpen ? "black" : "white",
                transform: menuOpen ? "rotate(45deg)" : "translateY(-5px)",
                transition:
                  "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, background 0.35s ease",
              }}
            />
            <Box
              component="span"
              sx={{
                position: "absolute",
                width: "16px",
                height: "2px",
                background: menuOpen ? "black" : "white",
                transform: menuOpen ? "rotate(-45deg)" : "translateY(5px)",
                transition:
                  "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, background 0.35s ease",
              }}
            />
          </Box>
        </Box>
      </Box>

      {!menuOpen && (
        <Box
          component="aside"
          sx={{
            position: "absolute",
            right: { xs: "12px", sm: "20px", lg: "40px" },
            top: { xs: "80px", md: "90px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: { xs: "calc(100% - 100px)", md: "calc(100vh - 100px)" },
            maxHeight: "600px",
            zIndex: 2980,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              gap: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
              mt: { xs: "15px", sm: "30px", md: "70px" },
            }}
          >
            {SOCIAL_ICONS.map(({ icon: Icon, href }, index) => (
              <Box
                key={index}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": { color: "#FFD94B" },
                }}
              >
                <Icon />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: "6px", sm: "12px" },
              fontSize: { xs: "0.65rem", sm: "0.75rem" },
              letterSpacing: { xs: "2px", sm: "3px" },
              fontWeight: 500,
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            <Box component="span">SCROLL DOWN</Box>
            <Box
              sx={{
                width: "1px",
                background: "white",
                animation: "scroll 2s infinite alternate",
              }}
            />
          </Box>
        </Box>
      )}

      {yellow && (
        <Box
          className="yellow-screen"
          sx={{
            position: "fixed",
            inset: 0,
            background: "#FFDE39",
            animation: "slide 0.45s forwards",
            zIndex: 3100,
          }}
        />
      )}

      <Box
        className="menu-overlay"
        sx={{
          position: "fixed",
          inset: 0,
          background: "#000",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          zIndex: 3200,
          transition: ".4s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="ul"
          sx={{ listStyle: "none", textAlign: "center", p: 0 }}
        >
          {MENU_ITEMS.map((item) => (
            <Box component="li" key={item.label} sx={{ my: "15px" }}>
              <Typography
                component="a"
                onClick={(e: React.MouseEvent) => handleLinkClick(e, item.href)}
                sx={{
                  fontSize: { xs: "22px", md: "28px", lg: "42px" },
                  fontWeight: 900,
                  color: "#fff",
                  cursor: "pointer",
                  transition: ".3s",
                  position: "relative",
                  display: "inline-block",
                  "&:hover": { color: "#FFDE39" },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          zIndex: 1,
          position: "relative",
          ...(menuOpen && { overflow: "hidden", height: "100vh" }),
        }}
      >
        {children}
      </Box>
    </>
  );
}
