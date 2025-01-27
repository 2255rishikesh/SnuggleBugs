import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Home = () => {
  const data = [
    {
      image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/552253a.webp',
      title: 'Sebamed Baby Gentle Wash|pH 5.5|Baby Body Wash|Soap Free|Tear Free|400 ml',
      description: 'MRP:600',
    },
    {
      image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/48194a.webp',
      title: 'Sebamed Baby Shampoo|pH 5.5| Ideal for Newborns delicate scalp| No Tears | 150 ml',
      description: '(057 per ml)',
    },
    {
      image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/3019457a.webp',
      title: 'Himalaya Extra Moisturizing Baby Wash - 400 ml MRP:330 ',
      description: 'MRP:381',
    },
    {
      image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/3437932a.webp',
      title: 'Babyhug Milk Protein Formula Daily Head To Toe Milky Wash No Tear Formula For Newborn Baby 2 In 1 Shampoo & Body Wash- 400 ml MRP: (399)231',
      description: '42 %off',
    },
  ];

  const banner = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVAmnPC7tu-yviXLUgisuprSnb3PPZUrF6A&s',
    'https://img.freepik.com/free-vector/hand-drawn-baby-shower-facebook-cover_23-2150566726.jpg?t=st=1737954525~exp=1737958125~hmac=7360d1892638707cdd0461642e73761e2d28e2d14d7887a38911fab813c75e1a&w=1380',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xQzTTd20lYXv2qFy5hoHztG7PxbCq0-OFY8&s',
  ];

  const category =[
    {
        title: 'Shamboo',
        image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/3437932a.webp'
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + banner.length) % banner.length
    );
  };
  return (
    <Stack padding={0}>
        <div style={{ position: 'relative' }}>
      {/* Left Arrow Button */}
      <IconButton
        onClick={prevImage}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowBackIos style={{ color: '#fff' }} />
      </IconButton>

      {/* Image */}
      <img
        src={banner[currentImageIndex]}
        width="100%"
        alt="Banner"
        style={{ objectFit: 'cover' }}
      />

      {/* Right Arrow Button */}
      <IconButton
        onClick={nextImage}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowForwardIos style={{ color: '#fff' }} />
      </IconButton>
    </div>
    <div style={{ overflowX: 'auto', flexWrap: 'nowrap', }}>
        {category.map(x=>(
            <div>
                
            </div>
        ))}

    </div>
      {/* Scrollable Container */}
      <Grid container spacing={3} style={{ background: "#000", paddingBottom: "20px", overflowX: 'auto', flexWrap: 'nowrap' }}>
        {data.map((item, index) => (
          <Grid item key={index}>
            <Card sx={{ width: "200px", marginRight: "10px" }}>
              <CardActionArea sx={{ minHeight: "300px", maxHeight: '450px' }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{ width: "100%", height: "auto", padding: 1 }}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Home;
