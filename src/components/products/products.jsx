import React from 'react'
import { Grid } from '@mui/material';
import Product from './Product';
import { Link } from 'react-router-dom';

const Products = ({productList, productCategory}) => {
    return (
        <main>
            
            <h1>{productCategory.length === 0 ? 'All Products' : productCategory.charAt(0).toUpperCase() + productCategory.slice(1)}</h1>
            <Grid id='productWrapper' container justify='center' spacing={4}>
                {productList.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Link style={{textDecoration: 'none'}} to={'product/' + product.id}>
                            <Product product={product} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
