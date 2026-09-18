import { Box, Typography } from "@mui/material";
export default function ContactHero() {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1919",
        color: "#fff",
        minHeight: { xs: "auto", md: "80vh" },
        height: "auto",
        padding: { xs: "80px 0 60px", md: "120px 0 80px" },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: 'url("/images/blogs/lines.png") repeat',
          backgroundSize: "auto",
          opacity: 1,
          filter: "brightness(1.2)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "42px", sm: "48px", md: "3.5rem", lg: "4.9rem" },
            fontWeight: 900,
            margin: "0 0 10px",
            color: "#fff",
            letterSpacing: "-2px",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "1.4rem" },
            color: "#ccc",
            maxWidth: "600px",
            lineHeight: 1.4,
          }}
        >
          Worldwide locations and an international culture shape our global
          footprint.
        </Typography>
      </Box>
    </Box>
  );
}
