"use client";
import Partners from "@/components/layouts/about/Partners";
import BrandGrid from "@/components/layouts/home/BrandGrid";
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
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
          variant="h2"
          sx={{
            fontSize: { xs: "42px", sm: "64px", md: "88px" },
            fontWeight: 800,
            marginBottom: "10px",
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 300,
            width: { xs: "100%", sm: "70%", md: "50%" },
            lineHeight: "27px",
          }}
        >
          The eComguru has got the sales you need in your e-commerce business
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", md: "50px" },
          maxWidth: "1200px",
          width: "90%",
          margin: { xs: "60px auto", md: "90px auto" },
          justifyContent: "space-between",
          height: "auto",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "45px" },
              color: "#212529",
              maxWidth: "500px",
              lineHeight: { xs: "42px", md: "54px" },
              fontWeight: 800,
            }}
          >
            LOOKING FOR 10X <br /> GROWTH?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              marginTop: "12px",
              color: "#808080",
              maxWidth: "90%",
              fontWeight: 300,
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: "30px",
            }}
          >
            Need help growing your eCommerce business? Search no more, The
            eComguru is here with what you need. Together, let's expand your
            business and accelerate your sales.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#212529",
              marginBottom: "20px",
              lineHeight: "26px",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            The eComguru is our D2C brand solution lab, where we combine
            strategy, art and technology to launch and enhance brands and
            increased sales. The eComguru focuses on result-oriented strategies
            to grow your brand and increase your brand visibility and sales on
            all e-commerce platforms such as Amazon, Flipkart, Myntra, Walmart,
            eBay etc. With The eComguru you can reach out to the large pool of
            audiences.
          </Typography>

          <Typography
            sx={{
              color: "#212529",
              marginBottom: "20px",
              lineHeight: "26px",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            We are all things e-commerce. We love to re-invent the e-retail in
            the growing e-commerce market by deploying latest technologies as
            push the high-performance limits. We simply help brands in preparing
            their first step or 100th step towards the e-commerce. The eComguru
            clients have made us achieve our milestone. We believe in long term
            relationship with clients and our clients love working with us due
            to our focused service orientation as we align ourselves with
            clients aim.
          </Typography>
        </Box>
      </Box>

      <Partners />
      <BrandGrid />
    </Box>
  );
}

