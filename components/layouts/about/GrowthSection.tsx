import { Box, Container, Typography, Grid } from '@mui/material';

export default function GrowthSection() {
  return (
    <Box data-aos="fade-up" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              LOOKING FOR 10X <br /> GROWTH?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
              Need help growing your eCommerce business? Search no more, The eComguru is here with what you need. Together, let’s expand your business and accelerate your sales.
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
              The eComguru is our D2C brand solution lab, where we combine strategy, art and technology to launch and enhance brands and increased sales. 
              The eComguru focuses on result-oriented strategies to grow your brand and increase your brand visibility and sales on all e-commerce platforms 
              such as Amazon, Flipkart, Myntra, Walmart, eBay etc. With The eComguru you can reach out to the large pool of audiences.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
              We are all things e-commerce. We love to re-invent the e-retail in the growing e-commerce market by deploying latest technologies as push the high-performance limits. 
              We simply help brands in preparing their first step or 100th step towards the e-commerce. The eComguru clients have made us achieve our milestone. 
              We believe in long term relationship with clients and our clients love working with us due to our focused service orientation as we align ourselves with clients aim.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
