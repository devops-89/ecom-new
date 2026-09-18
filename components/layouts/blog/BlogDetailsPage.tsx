"use client";
import { BLOG_POSTS } from "@/utils/generic-data";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import Image from "next/image";
import profileIcon from "@/public/images/profileIcon.jpg";

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Box sx={{ padding: "120px", textAlign: "center" }}>
        <Typography variant="h3">Blog Post Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", background: "#fff", color: "#000" }}>
      <Box
        component="section"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: { xs: "30vh", md: "40vh" },
          height: "auto",
          padding: { xs: "80px 0 50px", md: "120px 0 80px" },
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
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 8vw, 4.9rem)",
              fontWeight: 900,
              margin: 0,
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Blog
          </Typography>
        </Box>
      </Box>

      {post.image && (
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: { xs: "50px 0", md: "80px 0" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Author */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #f0f0f0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image src={profileIcon} alt="author" fill style={{ objectFit: "cover" }} />
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "block",
                  color: "#333",
                }}
              >
                by <b>{post.author || "Arya"}</b>
              </Typography>
              <Typography
                component="span"
                sx={{ fontSize: "14px", color: "#777" }}
              >
                {post.date || "December 22, 2023"}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ marginBottom: "40px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.8rem", md: "clamp(2rem, 5vw, 2.5rem)" },
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#000",
              }}
            >
              {post.title}
            </Typography>
          </Box>
          <Box
            dangerouslySetInnerHTML={{ __html: post.content }}
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.8,
              color: "#333",
              "& p": {
                marginBottom: "25px",
              },
              "& h2": {
                fontSize: "24px",
                fontWeight: 700,
                color: "#000",
                margin: "50px 0 20px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
