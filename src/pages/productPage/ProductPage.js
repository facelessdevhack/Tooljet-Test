import React, { Component } from 'react'
import { 
    Grid,
    CardMedia,
    Typography 
} from '@mui/material';
import Navbar from '../../components/navbar/navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cart';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './productStyle.css';

class ProductPage extends Component {
    state = {
        productDetail: {},
        isLoading: true,
    }
    static propTypes = {
        isLoading: PropTypes.bool,
        productList: PropTypes.array
    }
    filterProduct = () => {
        let obj = this.props.productList.find((product) => product.id == this.props.match.params.id)
        return this.setState({
            productDetail: obj
        })
    }
    componentDidMount() {
        setTimeout(() => this.setState({
            isLoading: false
        }),50)
        this.filterProduct()
    }
    addToCart = (id) => {
        this.props.addToCart(id)
    }
    render() {
        const { productDetail  }= this.state
        if(this.state.isLoading){
            return (
                <div id='loader'>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div>
            )
        }
        return (
            <>
                <Navbar home={false}/>
                <div id='product_page_wrapper'>
                    <Grid container justify='center' spacing={4}>
                        <Grid sm={12} lg={6}>
                            <CardMedia image={productDetail.image} id='product_page_media'/>
                        </Grid>
                        <Grid sm={12} lg={6} className='product_page_detail'>
                            <Typography variant='h5'>{productDetail.title}</Typography>
                            <div className="product_page_rating">
                                <Rating value={productDetail.rating.rate} read-only />
                                <p>{productDetail.rating.count+' Ratings'}</p>
                            </div>
                            <Typography variant='h5'>{"Price: $" + productDetail.price}</Typography>
                            <div>
                                <Typography variant='span'>{productDetail.description}</Typography>
                            </div>
                            <div className='add_to_cart_btn'>
                                <Link onClick={() => this.addToCart(productDetail)} to='/cart' >Add To Cart</Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    productList: state.products.productList
})
export default connect(mapStateToProps,{addToCart})(ProductPage)
