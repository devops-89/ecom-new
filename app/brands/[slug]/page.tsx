"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { BRANDS_DATA } from '@/utils/generic-data';
import BrandDetails from '@/components/layouts/brands/BrandDetails';

export default function BrandPage() {
  const params = useParams();
  const slug = (params?.slug as string)?.toLowerCase();
  const data = BRANDS_DATA[slug];

  if (!data) {
    return (
      <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#000", color: "#fff" }}>
        <Typography variant="h3">Brand Not Found</Typography>
      </Box>
    );
  }

  return <BrandDetails data={data} />;
}
