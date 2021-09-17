import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import useStyles from './productStyle';
import { Rating } from '@mui/material'

const Product = ({product}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="p" gutterBottom>
                        {product.title.length > 40? product.title.slice(0, 40) + "..." : product.title}
                    </Typography>
                </div>
                <div className={classes.cardPrice}>
                    <Typography variant="span">
                        {'$' + product.price}
                    </Typography>
                </div>
                <div className={classes.cardRating}>
                    <Rating value={product.rating.rate} read-only />
                    <p>{'('+product.rating.count+')'}</p>
                </div>
                
            </CardContent>
        </Card>
    )
}
export default Product