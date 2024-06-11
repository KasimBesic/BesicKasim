import React from 'react';
import { Typography, Box, Avatar, Paper } from '@mui/material';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <Box my={4} textAlign="center">
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Avatar alt="Kasim Besic" src={profilePic} sx={{ width: 150, height: 150, margin: 'auto' }} />
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          My name is Kasim Besic. I am the founder of Skyvo Digital, an innovative email marketing agency dedicated to helping businesses achieve their marketing goals through creative and effective email campaigns.
        </Typography>
        <Typography variant="body1" paragraph>
          I am currently pursuing my IT bachelor's degree at International Burch University, where I am honing my technical skills and expanding my knowledge in the field of information technology. My journey in digital marketing began with a passion for technology and a drive to help businesses grow.
        </Typography>
        <Typography variant="body1" paragraph>
          At Skyvo Digital, we believe in the power of data-driven marketing and personalized communication. Our team of experts works tirelessly to ensure that every campaign we create is tailored to meet the unique needs of each client. We stay ahead of industry trends and continuously innovate to deliver the best results.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
