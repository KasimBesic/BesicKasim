import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box my={4} textAlign="center">
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Kasim Besic's Portfolio
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Founder of Skyvo Digital
        </Typography>
        <Typography variant="body1" paragraph>
          At Skyvo Digital, we specialize in crafting top-notch email marketing campaigns that drive engagement and boost sales. With a focus on personalized strategies and data-driven results, we help businesses connect with their audience in meaningful ways.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to transform your email marketing efforts into powerful tools for customer engagement and revenue growth. Whether you're a small business or a large enterprise, we tailor our services to meet your unique needs.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/about">
          Learn More About Me
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
