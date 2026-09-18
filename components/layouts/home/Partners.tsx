"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import amazonIcon from "@/public/images/icons/amazon-Dark.svg";
import flipkartIcon from "@/public/images/icons/Flipkart-Dark.svg";
import myntraIcon from "@/public/images/icons/Myntra-Dark.svg";
import unicommerceIcon from "@/public/images/icons/UNICOMMERCE-Dark.svg";

const partners = [
  { name: "amazon", img: amazonIcon },
  { name: "flipkart", img: flipkartIcon },
  { name: "myntra", img: myntraIcon },
  { name: "unicommerce", img: unicommerceIcon },
];

export default function Partners() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      component="section"
      data-aos="fade-up"
      sx={{
        width: "100%",
        padding: { xs: "60px 16px 80px", md: "70px 20px 90px", lg: "150px 80px" },
        background: "#ffffff",
        textAlign: { xs: "center", lg: "left" },
      }}
    >
      <Typography
        component="h2"
        data-aos="fade-up"
        sx={{
          fontSize: { xs: "22px", md: "26px", lg: "45px" },
          fontWeight: 800,
          fontFamily: "'Segoe UI', sans-serif",
          textTransform: "uppercase",
          color: "#212529",
          letterSpacing: "1px",
        }}
      >
        <span>OUR PARTNERS</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", lg: "flex-start" },
          gap: { xs: "15px", md: "18px", lg: "30px" },
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        {partners.map((p, i) => (
          <Box
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 70}
            sx={{
              width: { xs: "100%", sm: "180px", lg: "300px" },
              maxWidth: { xs: "260px", sm: "100%" },
              height: { xs: "75px", md: "80px", lg: "130px" },
              background: "#ffffff",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.5s ease",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)",
              position: "relative",
              overflow: "hidden",
              "& .partner-img": {
                maxWidth: { xs: "50px", md: "55px", lg: "90px" },
                filter: "grayscale(100%)",
                opacity: 0.9,
                transition: "0.4s",
              },
              "& .partner-text": {
                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                textTransform: "uppercase",
                fontSize: "11px",
                fontWeight: 700,
                color: "#212529",
                transform: "translateY(20px)",
                transition: "0.4s ease",
                letterSpacing: "1px",
              },
              "&:hover": {
                "& .partner-img": {
                  filter: "grayscale(0%)",
                  opacity: 0,
                  transform: "scale(1.05)",
                },
                "& .partner-text": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Box className="partner-img" sx={{ position: "relative" }}>
              <Image src={p.img} alt={p.name} style={{ width: "100%", height: "auto" }} />
            </Box>
            <Box component="div" className="partner-text">
              <Typography
                sx={{
                  color: "#212529",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  fontSize: "inherit",
                }}
              >
                {p.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
