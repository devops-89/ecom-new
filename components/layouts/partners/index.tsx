"use client";
import LabSection from "@/components/layouts/about/LabSection";
import BrandGrid from "@/components/layouts/home/BrandGrid";
import { Box, Typography } from "@mui/material";

export default function PartnersPage() {
  return (
    <Box sx={{ width: "100%", background: "#fff", color: "#000" }}>
      <Box
        component="section"
        sx={{
          minHeight: { xs: "auto", md: "70vh" },
          height: "auto",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "100px 20px 60px", md: "140px 60px 80px" },
          color: "#fff",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem", lg: "4.6rem" },
            fontWeight: 900,
            marginBottom: "0px",
          }}
        >
          Partners
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            width: { xs: "100%", md: "70%", lg: "50%" },
            lineHeight: 1.5,
          }}
        >
          Your e-commerce business growth is our aim.
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "1200px",
          width: "90%",
          margin: { xs: "60px auto", md: "90px auto" },
          justifyContent: "space-between",
          gap: { xs: "30px", md: "50px" },
          height: "auto",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "40px" },
              color: "#212529",
              maxWidth: { xs: "100%", md: "500px" },
              fontWeight: 900,
            }}
          >
            WE GROW <br /> TOGETHER
          </Typography>
          <Typography
            sx={{
              marginTop: "12px",
              color: "#808080",
              width: "100%",
              lineHeight: 1.7,
            }}
          >
            As Howard Schultz claims "Success is best when it's shared", we here
            at eComguru share our success with our industry partners Amazon,
            Flipkart, Unicommerce, and Myntra.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              marginBottom: "20px",
              lineHeight: 1.7,
            }}
          >
            Engaging with the market place brands will help you deliver more
            value to your customers and achieve business objectives. With the
            digitally-enabled business interactions between your e-commerce and
            market places is an important industry segment within the supply
            chain. It can be used in numerous ways like sourcing...
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              lineHeight: 1.7,
            }}
          >
            The eComguru works in alignment with your brand's aim and works on
            marketing, sales strategies, techniques, managing vendors, ACOS
            (Advertising Cost of Sales) management and PPC (Pay-Per-Click)
            management in collaboration with the well-known partners.
          </Typography>
        </Box>
      </Box>

      <LabSection />
      <BrandGrid />
    </Box>
  );
}

