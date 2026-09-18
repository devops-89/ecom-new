"use client";
import BrandGrid from "@/components/layouts/home/BrandGrid";
import CaseStudies from "@/components/layouts/home/CaseStudies";
import Services from "@/components/layouts/home/Services";
import { Box, Divider, Typography } from "@mui/material";

export default function ServicesPage() {
  return (
    <Box sx={{ width: "100%", background: "#fff", color: "#000" }}>
      <Box
        component="section"
        sx={{
          height: { xs: "auto", md: "100vh" },
          background: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: { xs: "30px", md: "60px" },
          paddingRight: { xs: "30px", md: "60px" },
          paddingTop: { xs: "120px", md: 0 },
          paddingBottom: { xs: "80px", md: 0 },
          color: "#fff",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "36px", sm: "48px", md: "64px", lg: "88px" },
            lineHeight: { xs: "42px", sm: "52px", md: "64px", lg: "88px" },
            fontWeight: 800,
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            width: { xs: "100%", md: "70%", lg: "50%" },
            lineHeight: "27px",
            fontWeight: 300,
            mt: 2,
          }}
        >
          Boost your e-commerce sales instantly and rapidly with the eComguru
        </Typography>
      </Box>

      {/* Growth Section */}
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          margin: {
            xs: "100px 30px 0",
            md: "120px 50px 0",
            lg: "200px 50px 0",
          },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "32%" }, mb: { xs: 4, md: 0 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", sm: "36px", md: "45px" },
              fontWeight: 800,
              lineHeight: { xs: "44px", md: "54px" },
              marginBottom: "40px",
              color: "#212529",
            }}
          >
            360° SALES SOLUTIONS
          </Typography>
          <Typography
            sx={{
              color: "#808080",
              lineHeight: 1.7,
            }}
          >
            The eComguru is the perfect partner to help grow your e-commerce
            business. We offer a full range of services and pride ourselves on
            getting results.
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "59%" } }}>
          <Typography
            sx={{
              fontSize: "16px",
              marginBottom: "20px",
              lineHeight: "24px",
              fontWeight: 400,
              color: "#212529",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            The eComguru is known for winning a crowded D2C consumer market. We
            share our knowledge gained from our e-commerce consulting practices
            and create a perfect win-win situations for the e-commerce
            businesses, as it makes shopping easier and convenient for the
            customers. We you are ready for your e-commerce business; ...
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              marginBottom: "20px",
              lineHeight: "24px",
              fontWeight: 400,
              color: "#212529",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            The eComguru team will be happy to guide you and assist you choosing
            an e-commerce platform best-suited for your business objectives and
            budget expectations, and customize it to exceptionally meet your
            specific needs.
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          margin: { xs: "100px 0", md: "150px 0" },
          borderColor: "#EBEBEB",
        }}
      />

      <Services />
      <CaseStudies />
      <BrandGrid />
    </Box>
  );
}
