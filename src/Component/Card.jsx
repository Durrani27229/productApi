import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../config/redux/reducer/cartSlice';


function ProductCard({title, description, image , id , price}) {


    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
          onClick={() => navigate(`/product/${id}`)}

        //   className='img-fluid'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 20)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description.slice(0, 50)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Link to={`/product/${id}`} className='text-decoration-none'>See More</Link>
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(addToCart({title, description, image , id, price}))}>
          Add to Cart 
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
