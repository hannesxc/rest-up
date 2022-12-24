import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Map from './Map';

function Item({ restaurant }) {
  return (
    <Card sx={{ backgroundColor: 'rgba(255,255,255,0.4)', minHeight: 450, minWidth: 380 }} className='main'>
        <div className='map'>
            <Map area={{lat: restaurant.Geocode_Latitude, long: restaurant.Geocode_Longitude}} />
        </div>
        <br />
        <Divider variant='middle' sx={{ width: "80%" }}/>
        <CardContent sx={{ width: "80%", padding: '10px 0 0', textAlign: "left" }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'inherit', fontSize: '1rem' }} >
                {restaurant.BusinessName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'inherit' }}>
                {restaurant.AddressLine2}, {restaurant.AddressLine3}
                <br />
                Code: {restaurant.PostCode}
                <br />
                <Rating sx={{ display: 'flex' }} className='rating' name='read-only' value={parseInt(restaurant.RatingValue, 10)} readOnly />
            </Typography>
        </CardContent>
    </Card>
  );
}

export default Item;