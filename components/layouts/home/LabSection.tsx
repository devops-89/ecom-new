"use client";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import labBg from "@/public/images/lab-bg.jpg";
import labImage from "@/public/images/icons/lab-image.png";

export default function LabSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "auto", lg: "100vh" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "repeat(2, minmax(0, 1fr))" },
        alignItems: "center",
        padding: { xs: "40px 16px", md: "60px 30px", lg: "80px" },
        gap: { xs: "40px", md: "50px", lg: 0 },
        textAlign: { xs: "center", lg: "left" },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `url("${labBg.src}") center / cover no-repeat`,
          filter: "brightness(0.35)",
          zIndex: 0,
        }}
      />

      <Box
        data-aos="fade-right"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "220px", md: "280px", lg: "330px" },
              border: { xs: "6px solid #fff", lg: "10px solid #fff" },
              position: "relative",
            }}
          >
            <Image src={labImage} alt="Lab Desk" style={{ width: "100%", height: "auto", display: "block" }} />
          </Box>
        </Box>
      </Box>

      <Box
        data-aos="fade-left"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-start" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", lg: "420px" },
            color: "#fff",
          }}
        >
          <Typography
            component="h5"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "16px", lg: "20px" },
              fontFamily: '"Fjalla One", sans-serif',
              marginBottom: "10px",
              letterSpacing: "1px",
            }}
          >
            E-COM D2C BRAND SOLUTION LAB
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "28px", lg: "50px" },
              fontWeight: 800,
              fontFamily: "'Segoe UI', sans-serif",
              marginBottom: "25px",
            }}
          >
            THE ECOMGURU
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: 1.6,
              fontWeight: 300,
              fontFamily: "'Segoe UI', sans-serif",
              marginBottom: "40px",
            }}
          >
            The eCom Guru is one stop 360 degree business solution for your
            brand. We are brand scientists — a team of passionate, strategic
            thinkers and incredible data driven artists, who take craft of sales
            seriously. We combine strategy, art and technology to launch and
            enhance brand & sales in our lab.
          </Typography>
          <Box
            component="a"
            href="#"
            sx={{
              fontSize: { xs: "13px", lg: "12px" },
              display: "inline-block",
              border: "2px solid #fff",
              padding: { xs: "14px 32px", lg: "18px 45px" },
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
              transition: "0.3s ease",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.8)",
                color: "#FFDE39",
                borderColor: "#fff",
              },
            }}
          >
            TAKE A LOOK
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
