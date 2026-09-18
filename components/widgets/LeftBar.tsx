"use client";
import { Box } from "@mui/material";
import Image from "next/image";

export default function LeftBar() {
  return (
    <Box
      component="aside"
      sx={{
        position: "fixed",
        left: 0,
        right: "auto",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 5000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "40px",
        borderRadius: "0 12px 12px 0",
      }}
    >
      <Box
        component="button"
        sx={{
          width: "100%",
          height: "40px",
          background: "#000",
          border: "none",
          borderRadius: "0 12px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "#fff",
          fontSize: "22px",
        }}
      >
        <span>←</span>
      </Box>

      <Box
        component="a"
        href="#contact"
        sx={{
          width: "100%",
          height: "150px",
          background: "#FFDE39",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Box
          component="span"
          sx={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "12px",
            color: "#000",
            marginBottom: "10px",
            letterSpacing: "0.5px",
          }}
        >
          Contact Us
        </Box>
        <Box
          component="span"
          sx={{
            writingMode: "vertical-rl",
            transform: "rotate(270deg)",
            fontSize: "15px",
            color: "#000",
          }}
        >
          ✉
        </Box>
      </Box>

      <Box
        component="a"
        href="https://wa.me/9199999999"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: "40px",
          height: "40px",
          background: "#25D366",
          borderRadius: "0 0 12px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.5)",
          cursor: "pointer",
        }}
      >
        <Image
          src="/images/icons/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      </Box>
    </Box>
  );
}

