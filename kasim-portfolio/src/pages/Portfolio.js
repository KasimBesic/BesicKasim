import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, Paper } from '@mui/material';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';

const Portfolio = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" alt="Design 1" height="1200" image={design1} />
            <CardContent>
              <Typography variant="h6">Design 1</Typography>
              <Typography variant="body2" color="textSecondary">
                This design showcases our ability to create visually appealing email templates that engage users and drive conversions. The modern layout and vibrant colors are tailored to captivate the audience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" alt="Design 2" height="1200" image={design2} />
            <CardContent>
              <Typography variant="h6">Design 2</Typography>
              <Typography variant="body2" color="textSecondary">
                A sleek and professional design perfect for showcasing products and services. This template is designed to highlight key features and benefits, ensuring maximum engagement from recipients.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" alt="Design 3" height="1200" image={design3} />
            <CardContent>
              <Typography variant="h6">Design 3</Typography>
              <Typography variant="body2" color="textSecondary">
                An example of our creative approach to email marketing, blending vibrant colors with impactful messaging. This design is aimed at capturing attention and encouraging action.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
