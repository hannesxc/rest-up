import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Map from './Map';

function Item({ restaurant }) {
  return (
    <Card className='main'>
        <div className='map'>
            <Map area={{lat: restaurant.lat, long: restaurant.long}} />
        </div>
        <br />
        <Divider variant='middle' sx={{ width: "80%" }}/>
        <CardContent sx={{ width: "80%", textAlign: "left" }}>
            <div className='rating'>
                <Typography gutterBottom variant="h5" component="div">
                    {restaurant.BusinessName}
                </Typography>
                <Rating name='read-only' value={restaurant.RatingValue} readOnly />
            </div>
            <Typography variant="body2" color="text.secondary">
                {restaurant.AddressLine2}, {restaurant.AddressLine3}
                <br />
                Code: {restaurant.Postcode}
            </Typography>
        </CardContent>
    </Card>
  );
}

export default Item;