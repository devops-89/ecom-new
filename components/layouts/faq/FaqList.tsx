"use client";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const faqData = [
  {
    title: "CATALOG MANAGEMENT",
    items: [
      {
        q: "How do I get started with The eComguru for my catalog management project?",
        a: "The client of The eComguru is required to follow an easy three step process:\n1. Share the login details and product information of your e-commerce website along with providing us the product list.\n2. We'll put you in direct contact with the project manager supervising your project. He/she will give you daily updates. This ensures the client has complete accessible control over the project."
      },
      {
        q: "Do you do sample projects free of cost?",
        a: "No, we do not provide any sample projects. You have to pay for the services you want to use."
      }
    ]
  },
  {
    title: "INVENTORY MANAGEMENT",
    items: [
      {
        q: "Why do I need to manage my inventory?",
        a: "Inventory management provides you the ability to manage your stock levels. You can keep track of your inventory levels together with all the information on your orders, imports and exports."
      }
    ]
  }
];

export default function FaqList() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        {faqData.map((section, secIndex) => (
          <Box key={secIndex} sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              {section.title}
            </Typography>
            {section.items.map((question, index) => (
              <Accordion key={index} sx={{ mb: 1, '&:before': { display: 'none' } }}>
                <AccordionSummary sx={{ fontWeight: 600 }}>
                  {question.q}
                </AccordionSummary>
                <AccordionDetails sx={{ color: 'text.secondary', whiteSpace: 'pre-wrap' }}>
                  {question.a}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
