"use client";
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function BrandsPage() {
  const brands = [
    { slug: "furo", name: "Furo" },
    { slug: "gabicci", name: "Gabicci" },
    { slug: "inkurv", name: "Inkurv" },
    { slug: "perf", name: "Perf" },
    { slug: "redChief", name: "Red Chief" },
  ];

  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: "bold" }}
            gutterBottom
          >
            Our Brands
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Explore the brands we work with to boost their e-commerce success.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {brands.map((brand) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={brand.slug}>
              <Card sx={{ textAlign: "center" }}>
                <CardActionArea
                  component={Link}
                  href={`/brands/${brand.slug}`}
                  sx={{ p: 4 }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    {brand.name}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
