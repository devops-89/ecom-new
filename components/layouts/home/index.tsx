import { Box } from '@mui/material';
import Hero from "@/components/layouts/home/Hero";
import Services from "@/components/layouts/home/Services";
import LabSection from "@/components/layouts/home/LabSection";
import Partners from "@/components/layouts/home/Partners";
import CaseStudies from "@/components/layouts/home/CaseStudies";
import BrandGrid from "@/components/layouts/home/BrandGrid";

export default function HomePage() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <Services />
      <LabSection />
      <Partners />
      <CaseStudies />
      <BrandGrid />
    </Box>
  );
}
