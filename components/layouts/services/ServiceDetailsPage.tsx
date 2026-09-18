"use client";
import { SERVICES } from "@/utils/generic-data";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES.find((s: any) => s.slug === slug);

  if (!service) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ padding: "100px", textAlign: "center" }}>
          Service Not Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: { xs: "60vh", md: "80vh" },
          padding: { xs: "100px 0 60px", md: "120px 0 80px" },
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
              fontSize: { xs: "42px", md: "5rem" },
              fontWeight: 900,
              marginBottom: "20px",
              color: "#fff",
              lineHeight: 1.1,
              textTransform: "uppercase",
            }}
          >
            {service.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: 1.5,
              fontWeight: 400,
              color: "#ccc",
              maxWidth: "800px",
            }}
          >
            {service.subtitle}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          paddingBottom: "100px",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: "30px", md: "60px" },
            maxWidth: "1200px",
            margin: { xs: "60px auto 0", md: "120px auto 0" },
            padding: "0 20px",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "28px", md: "42px" },
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: { xs: "20px", md: "30px" },
                color: "#212529",
                textTransform: "uppercase",
              }}
            >
              {service.mainHeading}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#666",
                whiteSpace: "pre-line",
              }}
            >
              {service.mainSubheading}
            </Typography>
          </Box>

          <Box
            dangerouslySetInnerHTML={{ __html: service.leftContent }}
            sx={{
              width: { xs: "100%", md: "50%" },
              "& p": {
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: { xs: "1.6", md: "1.7" },
                marginBottom: "20px",
                color: "#333",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            maxWidth: "1200px",
            height: "1px",
            background: "#ebebeb",
            margin: { xs: "60px auto", md: "80px auto" },
          }}
        />

        <Box
          dangerouslySetInnerHTML={{ __html: service.bottomContent }}
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { xs: "0 20px", md: "0 40px" },
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: { xs: "1.6", md: "1.8" },
            color: "#333",
            "& p": {
              marginBottom: "25px",
            },
            "& b": {
              color: "#000",
            },
          }}
        />
      </Box>
    </Box>
  );
}
