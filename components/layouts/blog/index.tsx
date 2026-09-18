"use client";
import BlogCard from "@/components/layouts/blog/BlogCard";
import { Box, Typography } from "@mui/material";

import { BLOG_POSTS } from "@/utils/generic-data";

export default function BlogPage() {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
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
          sx={{
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "36px", md: "3.5rem", lg: "4.9rem" },
              fontWeight: 900,
              margin: "0 0 10px",
              color: "#fff",
            }}
          >
            Blog
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#ccc",
              maxWidth: "600px",
            }}
          >
            Stay updated with our latest news and articles
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "60px auto",
          paddingBottom: "60px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: "30px",
          }}
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              link={`/blog/${post.slug}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
