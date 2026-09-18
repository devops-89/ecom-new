"use client";
import { SERVICES } from "@/utils/generic-data";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import heroBgGif from "@/public/images/hero-bg.gif";
import logoImg from "@/public/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "#131313",
        color: "#FFFFFF",
        fontFamily: "'Segoe UI'",
        padding: { xs: "60px 15px 20px", md: "35px 0 10px" },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.35)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "85vw", sm: "75vw", md: "55vw", lg: "75vw" },
            maxWidth: "620px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: { xs: 0.3, md: 0.4, lg: 1 },
          }}
        >
          <Image src={heroBgGif} alt="footer bg" style={{ width: "100%", height: "auto" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr auto 1fr auto 1fr",
            lg: "minmax(260px, 320px) 1px minmax(220px, 360px) 1px minmax(180px, 260px)",
          },
          columnGap: { xs: 0, md: "25px", lg: "40px" },
          rowGap: { xs: "45px", md: 0 },
          margin: { xs: "60px auto", md: "20px auto" },
          textAlign: { xs: "center", md: "left" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "380px", md: "none" },
            margin: { xs: "auto", md: 0 },
          }}
        >
          <Box
            sx={{
              width: "190px",
              height: "auto",
              marginBottom: "22px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Image src={logoImg} alt="logo" style={{ width: "100%", height: "auto" }} />
          </Box>
          <Typography
            sx={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.92)",
              fontFamily: "'Segoe UI'",
            }}
          >
            The eCom Guru is one stop 360 degree business solution for your
            brand. We are brand scientists — a team of passionate, strategic
            thinkers and incredible data driven artists, who take craft of sales
            seriously. We combine strategy, art and technology to launch and
            enhance brand & sales in our lab.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "1px",
            height: "300px",
            background: "rgba(255,255,255,0.75)",
            alignSelf: "center",
            display: { xs: "none", md: "block" },
          }}
        />

        {/* CENTER COLUMN */}
        <Box
          sx={{
            maxWidth: { xs: "380px", md: "none" },
            margin: { xs: "auto", md: 0 },
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "18px",
            }}
          >
            SERVICES
          </Typography>
          <Box
            component="ul"
            sx={{ listStyle: "none", padding: 0, textAlign: "center" }}
          >
            {SERVICES.map((service) => (
              <Box
                component="li"
                key={service.id}
                sx={{ marginBottom: "10px" }}
              >
                <Typography
                  component={Link}
                  href={`/services/${service.slug}`}
                  sx={{
                    textDecoration: "none",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.85)",
                    transition: ".3s",
                    "&:hover": { color: "#fcd535", opacity: 1 },
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: "1px",
            height: "300px",
            background: "rgba(255,255,255,0.75)",
            alignSelf: "center",
            display: { xs: "none", md: "block" },
          }}
        />

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            maxWidth: { xs: "380px", md: "none" },
            margin: { xs: "auto", md: 0 },
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "18px",
            }}
          >
            QUICK LINKS
          </Typography>
          <Box
            component="ul"
            sx={{ listStyle: "none", padding: 0, textAlign: "center" }}
          >
            {[
              { label: "Contact Us", path: "/contact" },
              { label: "Blog", path: "/blog" },
              { label: "FAQ", path: "/faq" },
              { label: "Terms of Use", path: "/termsofuse" },
              { label: "Privacy Policy", path: "/privacypolicy" },
            ].map((link) => (
              <Box
                component="li"
                key={link.label}
                sx={{ marginBottom: "10px" }}
              >
                <Typography
                  component={Link}
                  href={link.path}
                  sx={{
                    textDecoration: "none",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.85)",
                    transition: ".3s",
                    "&:hover": { color: "#fcd535", opacity: 1 },
                  }}
                >
                  {link.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", zIndex: 2, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            marginTop: "20px",
          }}
        >
          {[
            {
              icon: FaFacebookF,
              href: "https://www.facebook.com/onlinechannelsalessolution",
            },
            { icon: FaTwitter, href: "https://x.com/theecomg" },
            {
              icon: FaInstagram,
              href: "https://www.instagram.com/onlinechannelsales/",
            },
            {
              icon: FaLinkedinIn,
              href: "https://in.linkedin.com/company/theecomguru",
            },
            {
              icon: FaPinterest,
              href: "https://in.pinterest.com/theecomguru_/",
            },
          ].map((social, idx) => (
            <Box
              key={idx}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#FFFFFF",
                fontSize: "24px",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { color: "#fcd535" },
              }}
            >
              <social.icon />
            </Box>
          ))}
        </Box>
        <Typography sx={{ fontSize: "14px", opacity: 0.75, marginTop: "10px" }}>
          © {new Date().getFullYear()} Digixito Media Private Limited
        </Typography>
      </Box>
    </Box>
  );
}


