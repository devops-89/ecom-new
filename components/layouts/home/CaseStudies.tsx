"use client";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

import Image from "next/image";
import redchiefImg from "@/public/images/icons/redchief.webp";
import perfImg from "@/public/images/icons/PERF.webp";
import furoImg from "@/public/images/icons/furo.webp";
import gabicciImg from "@/public/images/icons/Gabicci.webp";
import inkurvImg from "@/public/images/icons/inkurv.png";
import aushaImg from "@/public/images/icons/Ausha.webp";

const cases = [
  { img: redchiefImg, name: "Red Chief", slug: "redchief" },
  { img: perfImg, name: "PERF", slug: "perf" },
  { img: furoImg, name: "Furo", slug: "furo" },
  { img: gabicciImg, name: "Gabicci", slug: "gabicci" },
  { img: inkurvImg, name: "Inkurv", slug: "inkurv" },
  { img: aushaImg, name: "Ausha", slug: "ausha" },
];

export default function CaseStudies() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#000",
        padding: { xs: "60px 0", md: "90px 0" },
      }}
    >
      <Typography
        component="h2"
        data-aos="fade-up"
        sx={{
          fontSize: { xs: "24px", sm: "30px", md: "35px" },
          fontWeight: 900,
          color: "#ffffff",
          marginBottom: { xs: "30px", md: "50px" },
          paddingLeft: { xs: "20px", sm: "35px", md: "55px" },
          textAlign: "left",
        }}
      >
        CASE STUDIES
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: "40px 20px", md: "70px 30px" },
        }}
      >
        {cases.map((c, i) => (
          <Box
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            sx={{
              position: "relative",
              width: "100%",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              "&:hover": {
                "& .case-img": {
                  transform: "scale(1.03)",
                  filter: "brightness(1)",
                },
                "& .case-detail": {
                  display: "block",
                  color: "#FFD94A",
                  borderColor: "#FFD94A",
                },
              },
            }}
          >
            <Box
              className="case-img"
              sx={{
                width: "100%",
                maxWidth: { xs: "340px", md: "100%" },
                height: { xs: "220px", sm: "260px", md: "320px", lg: "360px" },
                transition: "0.4s ease",
                filter: "brightness(0.85)",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image 
                src={c.img} 
                alt={c.name} 
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover", display: "block" }}
              />
            </Box>
            <Typography
              component="h3"
              sx={{
                position: { xs: "relative", md: "absolute" },
                bottom: { xs: 0, md: "85px" },
                left: { xs: 0, md: "-20px" },
                marginTop: { xs: "12px", md: 0 },
                color: "#fff",
                fontFamily: "'Segoe UI', sans-serif",
                fontSize: { xs: "20px", sm: "22px", md: "28px" },
                fontWeight: 800,
                textTransform: "capitalize",
                pointerEvents: "none",
                zIndex: 2,
              }}
            >
              {c.name}
            </Typography>
            <Typography
              component={Link}
              className="case-detail"
              href={`/brands/${c.slug}`}
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                position: { xs: "relative", md: "absolute" },
                bottom: { xs: 0, md: "50px" },
                left: { xs: 0, md: "2px" },
                marginTop: { xs: "6px", md: 0 },
                fontFamily: '"Fjalla One", sans-serif',
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "1px",
                borderBottom: "2px solid #fff",
                display: "inline-block",
                textDecoration: "none",
                transition: "0.3s ease",
                "&:hover": {
                  color: "#FFD94A",
                  borderColor: "#FFD94A",
                },
              }}
            >
              LEARN MORE
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

