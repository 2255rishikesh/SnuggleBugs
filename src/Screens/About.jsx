import React from 'react';
import { Typography, Box, Stack, Button } from '@mui/material';
import NavBar from '../Components/Navbar'; // If you have a Navbar component

function About() {
    return (
        <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            
            <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                {/* About Us Section */}
                <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Typography variant="h2" sx={{ fontWeight: 600 }}>About Us</Typography>
                    <Typography variant="body1" sx={{ marginTop: '20px', color: '#555' }}>
                        We are a passionate team of individuals committed to providing the best products and services to our customers. With a focus on quality and customer satisfaction, we strive to make a positive impact in everything we do.
                    </Typography>
                </Box>

                {/* Our Mission Section */}
                <Box sx={{ marginBottom: '40px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, textAlign: 'center' }}>Our Mission</Typography>
                    <Typography variant="body1" sx={{ marginTop: '20px', color: '#555' }}>
                        Our mission is to create a seamless experience for our customers by offering high-quality products and excellent service. We aim to be your go-to destination for all your needs, and we are constantly innovating to improve your experience.
                    </Typography>
                </Box>

                

                {/* Contact Us Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>Contact Us</Typography>
                    <Typography variant="body1" sx={{ marginTop: '20px', color: '#555' }}>
                        If you have any questions or would like to learn more about our services, feel free to reach out to us. We would love to hear from you!
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '20px',
                            backgroundColor: '#ba562b',
                            '&:hover': { backgroundColor: '#8b3e1e' },
                        }}
                        href="/contact"
                    >
                        Get in Touch
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default About;
