import React from 'react'
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" paragraph>
          Welcome to our site! We're a team of developers and creators passionate about building
          clean, responsive, and user-friendly web applications. Our mission is to deliver value
          through beautiful design and powerful functionality.
        </Typography>
        <Typography variant="body1" paragraph>
          This project is built with React and Material UI to ensure a modern and scalable user
          experience. Whether you're here to explore, learn, or get in touch — we're glad to have
          you!
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to check out our Products, or head over to the Contact page to reach out.
        </Typography>
      </Box>
    </Container>
  )
}

export default About
