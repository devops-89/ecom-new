"use client";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function PartnersSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        background: "#000",
        color: "#fff",
        padding: { xs: "80px 5%", md: "120px 6%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          marginBottom: "120px",
          maxWidth: "1200px",
          width: "100%",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "45px" },
            fontWeight: 800,
            lineHeight: { xs: "auto", md: "54px" },
            margin: "0px 0px 40px",
          }}
        >
          OUR PARTNERS
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "16px" },
            lineHeight: "24px",
            fontWeight: 400,
            fontFamily: "'Segoe UI', sans-serif",
            color: "#ffffff",
            margin: "0px 0px 16px",
          }}
        >
          Partnership with leading e-commerce platforms have led to many
          successful journeys of e-commerce businesses and sellers. The eComguru
          believes on simplification of e-commerce selling across the globe.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "16px" },
            lineHeight: "24px",
            fontWeight: 400,
            fontFamily: "'Segoe UI', sans-serif",
            color: "#ffffff",
            margin: "0px 0px 16px",
          }}
        >
          Automate the supply chain and account management of your e-commerce
          business with a unified view of operations from a single and reliable
          source of data by using The eComguru cost effective e-commerce
          solutions. Let's grow together with The eComguru.
        </Typography>
      </Box>

      {/* 2 COLUMN GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "60px", md: "80px 60px" },
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              filter: "grayscale(100%)",
              transition: "all 0.3s ease",
              "&:hover": { filter: "grayscale(0%)", transform: "scale(1.05)" },
              margin: { xs: "0 auto", md: "0" },
              maxWidth: { xs: "200px", md: "240px" },
            }}
          >
            <Image
              src="/images/Flipkart-1.png"
              width={250}
              height={120}
              alt="Flipkart"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: 400,
              color: "#ffffff",
              margin: "0px 0px 25px",
            }}
          >
            Flipkart platform is an Indian e-commerce brand known for its
            e-commerce services, which initially focused on online book sales
            before expanding into other product categories such as apparels,
            watches, home essentials, garden and farming essentials, consumer
            electronics, groceries, and lifestyle products.
            <br />
            <br />
            Flipkart.com primarily competes with Amazon's Indian subsidiary and
            domestic rival Snapdeal. Flipkart holds a dominant position in the
            apparel segment by acquisition of Myntra and with the neck-to-neck
            competition with Amazon in the sale of electronics and mobile
            phones. Flipkart is also into UPI payments and owns PhonePe
            platform. Also, the American retail chain Walmart acquired a stake
            in Flipkart in 2018. Flipkart has its own logistics services known
            as Ekart. The health services by Flipkart are known as Sastasundar.
          </Typography>
        </Box>

        {/* Amazon */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              filter: "grayscale(100%)",
              transition: "all 0.3s ease",
              "&:hover": { filter: "grayscale(0%)", transform: "scale(1.05)" },
              margin: { xs: "0 auto", md: "0" },
              maxWidth: { xs: "200px", md: "240px" },
            }}
          >
            <Image
              src="/images/amazon-1.png"
              width={250}
              height={120}
              alt="Amazon"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: 400,
              color: "#ffffff",
              margin: "0px 0px 25px",
            }}
          >
            Amazon platform is world's famous brand known for its e-commerce
            services, cloud computing, online advertising, digital streaming and
            artificial intelligence. It is one of the most influential economic
            and cultural forces in the world and is one of the most valuable
            brands in the world.
            <br />
            <br />
            Amazon.com is an e-commerce platform that sells many product lines;
            you name it and Amazon has it. The platform includes media (books,
            movies, music, and software), apparel, baby products, consumer
            electronics, beauty products, gourmet food, groceries, health and
            personal care products, industrial and scientific supplies, kitchen
            items, jewellery, watches, toys, garden supplies, farm supplies,
            musical instruments, sports equipment and many more. Amazon platform
            is country specific and they do provide international shipping.
          </Typography>
        </Box>

        {/* Myntra */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              filter: "grayscale(100%)",
              transition: "all 0.3s ease",
              "&:hover": { filter: "grayscale(0%)", transform: "scale(1.05)" },
              margin: { xs: "0 auto", md: "0" },
              maxWidth: { xs: "200px", md: "240px" },
            }}
          >
            <Image
              src="/images/myntra.png"
              width={250}
              height={120}
              alt="Myntra"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: 400,
              color: "#ffffff",
              margin: "0px 0px 25px",
            }}
          >
            Myntra is one of the major fashion e-commerce companies. Being
            India's largest e- commerce store for fashion and lifestyle
            products, Myntra aims at providing a hassle free and enjoyable
            shopping experience to shoppers across the country with the widest
            range of brands and products on its portal. The brand is making a
            conscious effort to bring the power of fashion to shoppers with an
            array of the latest and trendiest products available in the country.
            Myntra was acquired by Flipkart in 2014.
            <br />
            <br />
            Myntra provides a platform for sellers to enlist their fashion and
            lifestyle products for the customers across India. Myntra's value
            revolves around giving consumers the power and ease of purchasing
            fashion and lifestyle products online. Offerings such as the largest
            in-season product catalogue, 100% authentic products, cash on
            delivery and 30-day return policy make Myntra, the preferred
            shopping destination in the country. To make online shopping easier
            for you, a dedicated customer connect team is on standby to answer
            your queries 24x7.
          </Typography>
        </Box>

        {/* Unicommerce */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              filter: "grayscale(100%)",
              transition: "all 0.3s ease",
              "&:hover": { filter: "grayscale(0%)", transform: "scale(1.05)" },
              margin: { xs: "0 auto", md: "0" },
              maxWidth: { xs: "200px", md: "240px" },
            }}
          >
            <Image
              src="/images/unicommerce-1.png"
              width={250}
              height={120}
              alt="Unicommerce"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: 400,
              color: "#ffffff",
              margin: "0px 0px 25px",
            }}
          >
            Unicommerce e-Solutions is India's largest e-commerce focused supply
            chain SaaS technology platform. Established ten years ago,
            Unicommerce provides e-commerce enablement software for multichannel
            selling, inventory management, warehouse management and omnichannel
            solutions. The solution is designed to meet the business needs of
            e-commerce and e-tailers across sectors and has served over 15,000
            registered customers across India, Middle East, South East Asia, and
            South Asia. The company currently manages over 2000+ stores and
            7000+ warehouses and processes over 1.3 million transactions every
            day annually amounting to USD 5bn GMV annually.
            <br />
            <br />
            Some of its key clientele includes Myntra, Jack & Jones, Adidas,
            Vero Moda, Chumbak, W, House of Anita Dongre, Forever New, Marico,
            Netmeds, Healthkart, Mamaearth, mCaffeine, Sugar Cosmetics, Lakme,
            and Nivea among many others.
            <br />
            <br />
            Unicommerce's mission is to empower businesses to manage their
            operations at every stage of growth. Right from small-scale
            start-ups to large enterprises, Unicommerce has been a preferred
            choice of businesses for years.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
