import { Box, Container, Typography } from '@mui/material';

export default function FaqHero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 3,
            fontSize: { xs: '2.5rem', md: '4rem' },
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: 400, mb: 4 }}
        >
          When in doubt, drop your question and The eComguru will make sure to make you doubt less.
        </Typography>
      </Container>
    </Box>
  );
}
