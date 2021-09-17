import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar/navbar';
import { styled } from '@mui/material/styles';
import { Grid, Typography, ButtonBase, Paper} from '@mui/material';
import { DecreaseQuantity, DeleteCart, IncreaseQuantity } from '../../redux/actions/cart';
import './cart.css';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

class Cart extends Component {
    state = {
        Carts: [],
        TotalCart: 0
    }
    static propTypes = {
        Carts: PropTypes.array,
         numberCart: PropTypes.number
    }
    static getDerivedStateFromProps = (nextProps, nextState) => {
        const { Carts } = nextProps;
        return { Carts }
    }
    componentDidMount() {
        let ListCart = [];
        let TotalCart=0;
        // Object.keys(items.Carts).forEach(function(item){
        //     ListCart.push(items.Carts[item]);
        // });
        Object.keys(this.state.Carts).forEach((item) => {
            TotalCart+=this.state.Carts[item].quantity * this.state.Carts[item].price;
            ListCart.push(this.state.Carts[item]) 
        })
    }
    
    TotalPrice(){
        let TotalCart = 0
        Object.keys(this.state.Carts).forEach((item) => {
            TotalCart+=this.state.Carts[item].quantity * this.state.Carts[item].price;
        })
        return Number(TotalCart).toLocaleString('en-us')
    }

    render() {
        return (
            <>
            <Navbar home={false} />
            <div id='cart_wrapper'>
                <div>
                    {this.state.Carts.length === 0 ?
                         <Paper sx={{ p: 6.35, margin: 'auto', maxWidth: 500, width: '60vw', flexGrow: 1 }}>
                             <Typography gutterBottom variant="subtitle1" component="div" style={{padding: '20px'}}>
                                 There is Nothing in the Cart
                            </Typography>
                            <Grid item>
                                <Link to='/' className="cart_btns">Shop Now</Link>
                            </Grid>
                        </Paper>
                        :
                        <div>
                            {this.state.Carts.map((prod, key) => (
                                <Grid container lg={12}>
                                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                                    <Img alt="complex" src={prod.image} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div" style={{padding: '0 10px'}}>
                                                            {prod.title}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            {prod.category.charAt(0).toUpperCase() + prod.category.slice(1)}
                                                        </Typography>
                                                        <div id='quantity_wrapper'>
                                                            <IconButton onClick={() => this.props.IncreaseQuantity(key)} aria-label="cart">
                                                                    <Add />
                                                            </IconButton>
                                                            <Typography variant="body2" gutterBottom>
                                                                {this.props.Carts[key].quantity}
                                                            </Typography>
                                                            <IconButton onClick={() => this.props.DecreaseQuantity(key)} aria-label="cart">
                                                                    <RemoveIcon />
                                                            </IconButton>
                                                        </div>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className='cart_btns' onClick={() => this.props.DeleteCart(key)} sx={{ cursor: 'pointer'}} variant="body2">
                                                            Remove
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        {'$'+ prod.price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))}
                        </div>
                    }
            </div>
            <Paper sx={{ p: 4, margin: 'auto', maxWidth: 200, flexGrow: 1 }}> 
                <Typography variant="body2" gutterBottom>
                    Total Amount
                </Typography>
                <p>${this.TotalPrice()}</p>
                <button className="cart_btns">Checkout</button>
            </Paper>
            </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    Carts: state.cart.Carts,
    numberCart: state.cart.numberCart
})
export default connect(mapStateToProps, {IncreaseQuantity, DecreaseQuantity, DeleteCart})(Cart)
