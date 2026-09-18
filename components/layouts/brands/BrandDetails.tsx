import { Box, Typography } from "@mui/material";
import Image from "next/image";

import type { BrandDetailsProps } from "@/types/brands.types";

export default function BrandDetails({ data }: BrandDetailsProps) {
  if (!data) return null;

  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#ededed" }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: { xs: "auto", md: "70vh" },
          padding: { xs: "100px 0 60px", md: "140px 0 80px" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `linear-gradient(45deg,
              rgba(255, 255, 255, 0.03) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.03) 50%,
              rgba(255, 255, 255, 0.03) 75%,
              transparent 75%,
              transparent)`,
            backgroundSize: "20px 20px",
            opacity: 0.5,
          },
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "1200px",
            margin: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", sm: "48px", md: "4.5rem" },
              fontWeight: 900,
              marginBottom: "15px",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: { xs: "24px", md: "28px" },
              fontWeight: 300,
              color: "#ccc",
              maxWidth: { xs: "100%", md: "65%" },
            }}
          >
            {data.subtitle}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          width: "90%",
          margin: { xs: "40px auto", md: "60px auto" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "42px" },
            fontWeight: 800,
            lineHeight: { xs: "32px", md: "50px" },
            marginBottom: "20px",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          About {data.title}
        </Typography>
        {data.about.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: "26px",
              fontFamily: "'Segoe UI', sans-serif",
              marginBottom: "16px",
              color: "#d1d1d1",
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>

      <Box sx={{ width: "100%", overflow: "hidden", my: { xs: 4, md: 6 } }}>
        <Image src={data.bannerImg} alt={data.title} style={{ maxWidth: "100%", width: "100%", height: "auto", display: "block" }} />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px", md: "30px" },
          my: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Image src={data.gridImg1} alt="grid1" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Image src={data.gridImg2} alt="grid2" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          width: "90%",
          margin: { xs: "60px auto 80px", md: "80px auto 120px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "38px" },
              textTransform: "uppercase",
              marginBottom: "15px",
              color: "#ffffff",
              lineHeight: { xs: "32px", md: "46px" },
              fontWeight: 800,
            }}
          >
            The Solution
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#b0b0b0",
              fontWeight: 300,
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: "28px",
            }}
          >
            {data.solution}
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "38px" },
              textTransform: "uppercase",
              marginBottom: "15px",
              color: "#ffffff",
              lineHeight: { xs: "32px", md: "46px" },
              fontWeight: 800,
            }}
          >
            The Problem
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#b0b0b0",
              fontWeight: 300,
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: "28px",
            }}
          >
            {data.problem}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

