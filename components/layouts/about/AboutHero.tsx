import { Box, Container, Typography } from '@mui/material';

export default function AboutHero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          data-aos="fade-up"
          sx={{
            fontWeight: 800,
            mb: 3,
            fontSize: { xs: '2.5rem', md: '4rem' },
          }}
        >
          About
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 4,
            fontWeight: 400,
          }}
        >
          The eComguru has got the sales you need in your e-commerce business
        </Typography>
      </Container>
    </Box>
  );
}
