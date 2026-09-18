"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { FAQ_DATA } from "@/utils/generic-data";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <>
      {/* Hero Header */}
      <Box
        component="section"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: { xs: "50vh", sm: "60vh", md: "80vh", lg: "100vh" },
          height: "auto",
          padding: { xs: "60px 0 40px", sm: "80px 0 50px", md: "100px 0 60px", lg: "120px 0 80px" },
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
              transparent 75%)`,
            backgroundSize: "20px 20px",
            opacity: 0.5,
          },
        }}
      >
        <Box sx={{ width: "90%", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "30px", sm: "36px", md: "3.5rem", lg: "4.9rem" },
              fontWeight: 900,
              margin: "0 0 10px",
              color: "#fff",
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: "27px",
              fontWeight: 300,
              color: "#ccc",
              maxWidth: { xs: "100%", sm: "80%", lg: "65%" },
            }}
          >
            When in doubt, drop your question and The eComguru will make sure to make you doubt less.
          </Typography>
        </Box>
      </Box>

      {/* FAQ Accordion */}
      <Box sx={{ backgroundColor: "#fafafa", width: "100%" }}>
        <Box
          component="section"
          sx={{
            width: { xs: "95%", md: "85%" },
            margin: "0 auto",
            padding: { xs: "70px 16px", md: "110px 0" },
          }}
        >
          {FAQ_DATA.map((section, secIndex) => (
          <Box key={secIndex}>
            <Typography
              component="h2"
              sx={{
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "24px",
                color: "#212529",
                fontFamily: '"Segoe UI"',
                mb: "20px",
                mt: "40px",
                textTransform: "uppercase",
              }}
            >
              {section.title}
            </Typography>

            {section.items.map((question, index) => {
              const currentIndex = `${secIndex}-${index}`;
              return (
                <Box
                  key={currentIndex}
                  sx={{ padding: "12px 0", borderBottom: "1px solid #eee" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setOpenIndex(openIndex === currentIndex ? null : currentIndex)
                    }
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#FFD94A",
                        fontSize: "16px",
                        fontWeight: 800,
                        lineHeight: "24px",
                        minWidth: "18px",
                      }}
                    >
                      {openIndex === currentIndex ? "−" : "+"}
                    </Typography>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#212529",
                        fontFamily: '"Segoe UI"',
                        lineHeight: "19.2px",
                      }}
                    >
                      {question.q}
                    </Typography>
                  </Box>

                  {openIndex === currentIndex && (
                    <Box
                      sx={{
                        ml: "30px",
                        mt: "10px",
                        fontSize: "16px",
                        color: "#212529",
                        fontFamily: '"Segoe UI"',
                        lineHeight: "24px",
                        fontWeight: 400,
                      }}
                    >
                      {question.a}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        ))}
        </Box>
      </Box>
    </>
  );
}
