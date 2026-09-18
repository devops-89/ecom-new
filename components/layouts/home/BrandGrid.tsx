"use client";
import { useEffect } from "react";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography } from '@mui/material';

import ecom01Img from "@/public/images/icons/ecom01.webp";
import ecom02Img from "@/public/images/icons/ecom02.webp";
import ecom03Img from "@/public/images/icons/ecom03.webp";
import ecom04Img from "@/public/images/icons/ecom04.webp";
import ecom05Img from "@/public/images/icons/ecom05.webp";
import ecom06Img from "@/public/images/icons/ecom06.webp";

export default function BrandGrid() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const brands = [
    { name: "Red Chief", img: ecom01Img },
    { name: "Furo", img: ecom02Img },
    { name: "Ausha", img: ecom03Img },
    { name: "PERF", img: ecom04Img },
    { name: "Inkurv", img: ecom05Img },
    { name: "Gabicci", img: ecom06Img },
  ];

  return (
    <Box
      component="section"
      data-aos="fade-up"
      sx={{
        width: "100%",
        background: "#F9F9F9",
        padding: { xs: "24px 16px", md: "40px 30px" },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
          gap: { xs: "16px", md: "24px" },
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {brands.map((b, i) => (
          <Box
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              maxWidth: "210px",
              height: { xs: "80px", sm: "90px", md: "100px" },
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
              position: "relative",
              overflow: "hidden",
              padding: "12px 16px",
              boxSizing: "border-box",
              "& .brand-img": {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.3s ease",
                "& img": {
                  maxHeight: { xs: "36px", sm: "42px", md: "46px" },
                  maxWidth: { xs: "100px", sm: "120px", md: "135px" },
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  transition: "0.3s ease",
                  opacity: 0.9,
                  filter: "grayscale(100%)",
                },
              },
              "& .brand-text": {
                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 600,
                color: "#212529",
                transform: "translateY(20px)",
                transition: "0.4s ease",
                padding: "0 8px",
                textAlign: "center",
              },
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                "& .brand-img": {
                  opacity: 0,
                  transform: "scale(1.05)",
                },
                "& .brand-text": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Box className="brand-img">
              <Image src={b.img} alt={b.name} />
            </Box>
            <Typography component="div" className="brand-text">
              {b.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

