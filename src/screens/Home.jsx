import React, { useState } from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Home = () => {

  console.log("fghjk");
  
  
  const data = [
    {
      _id:'fghjk',
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
    'https://mumzonepregnancytips.wordpress.com/wp-content/uploads/2014/07/cropped-hd-happy-baby-happy-mom-banner.jpg ',
    'https://t3.ftcdn.net/jpg/05/94/30/44/360_F_594304427_NqCOYmISHLSmVqwLTmtRSMjAgqdUaVwz.jpg',
  ];

  const category = [
    {
      title: 'Shamboo',
      image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/3437932a.web'
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
  const handleProduct= (id)=>{

  }
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
        {category.map(x => (
          <div>

          </div>
        ))}

      </div>
      {/* Scrollable Container */}
      <Grid container spacing={3} style={{ background: "#000", paddingBottom: "20px", overflowX: 'auto', flexWrap: 'nowrap',paddingTop:"29px" }}>
        {data.map((item, index) => (
          <Button onClick={() => window.location.href = `/product/`}>
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
          </Button>
        ))}
      </Grid>
    </Stack>
  );
};


export default Home;
