"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import type { BlogCardProps } from "@/types/blog.types";

export default function BlogCard({ title, description, image, link = "#" }: BlogCardProps) {
  return (
    <Box
      data-aos="fade-up"
      sx={{
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: "8px",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "200px", sm: "240px", md: "280px" },
          backgroundColor: "#1a1919",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "4px",
                position: "relative",
              }}
            />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          padding: { xs: "18px", md: "24px" },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.4rem" },
            fontWeight: 800,
            marginBottom: "12px",
            color: "#000",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#555",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Box
          component={Link}
          href={link}
          sx={{
            display: "inline-block",
            backgroundColor: "#000",
            color: "#fff",
            padding: { xs: "12px 28px", sm: "14px 36px" },
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            alignSelf: "flex-start",
            marginTop: "auto",
            transition: "all 0.3s ease",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#FFD94A",
              color: "#000",
            },
          }}
        >
          READ MORE
        </Box>
      </Box>
    </Box>
  );
}

