"use client";
import { SERVICES } from "@/utils/generic-data";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import catalogIcon from "@/public/images/icons/catalog.png";
import inventoryIcon from "@/public/images/icons/inventory.png";
import pricingIcon from "@/public/images/icons/pricing.png";
import channelIcon from "@/public/images/icons/channel.png";
import campaignIcon from "@/public/images/icons/campaign.png";
import valueIcon from "@/public/images/icons/value.png";
import visibilityIcon from "@/public/images/icons/visibility.png";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getIcon = (slug: string): StaticImageData => {
    const icons: Record<string, StaticImageData> = {
      "catalog-management": catalogIcon,
      "inventory-management": inventoryIcon,
      "pricing-offers-discounts": pricingIcon,
      "channel-sales-management": channelIcon,
      "campaign-management": campaignIcon,
      "partner-value-added-services": valueIcon,
      "brand-visibility-management": visibilityIcon,
    };
    return icons[slug] || catalogIcon;
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
        padding: { xs: "60px 20px", lg: "110px 80px" },
        background: "#fff",
        gap: "40px",
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "100%", lg: "40%" },
          position: { xs: "relative", lg: "sticky" },
          top: { xs: "unset", lg: "120px" },
          alignSelf: "flex-start",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "32px", lg: "45px" },
            fontWeight: 800,
            fontFamily: "'Segoe UI', sans-serif",
            color: "#212529",
            lineHeight: 1.1,
            margin: "0px 0px 40px",
          }}
        >
          SERVICES WITH ECOMGURU
        </Typography>
        <Typography
          component="h6"
          sx={{
            fontSize: { xs: "16px", lg: "17px" },
            fontWeight: 300,
            fontFamily: "'Segoe UI', sans-serif",
            color: "#808080",
            lineHeight: { xs: 1.7, lg: 1.9 },
            margin: "0px 0px 8px",
          }}
        >
          ecomguru is the perfect partner to help you grow your eCommerce
          business. We offer a full range of services and pride ourself on
          getting results.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", lg: "60%" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          padding: { xs: "5px", lg: "30px" },
          gap: "40px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(auto-fit, minmax(220px, 1fr))",
            },
            gap: "35px",
          }}
        >
          {SERVICES.map((service: any, index: number) => (
            <Box
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              sx={{
                width: "100%",
                padding: "20px",
                borderRadius: "20px",
                background: "white",
                transition: "all 0.3s ease",
              }}
            >
              <Box sx={{ width: "50px", marginBottom: "15px", position: "relative" }}>
                <Image src={getIcon(service.slug)} alt={service.title} style={{ width: "100%", height: "auto" }} />
              </Box>
              <Typography
                component="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: 800,
                  fontFamily: "'Segoe UI', sans-serif",
                  color: "#212529",
                  lineHeight: 1.3,
                  margin: "0px 0px 5px",
                }}
              >
                {service.title.toUpperCase()}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#212529",
                  fontFamily: "'Segoe UI', sans-serif",
                  margin: "0px 0px 25px",
                }}
              >
                {service.subtitle}
              </Typography>
              <Box
                component={Link}
                href={`/services/${service.slug}`}
                sx={{
                  position: "relative",
                  color: "#FFD94A",
                  fontFamily: "'Segoe UI', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "-6px",
                    width: "0%",
                    height: "1px",
                    background: "#000",
                    transition: "width 0.5s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                LEARN MORE
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
