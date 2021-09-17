import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

class Navbar extends Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        categories: PropTypes.array,
        isAuthenticated: PropTypes.bool,
        numberCart: PropTypes.number
    }
    handleClick = (category) => {
        // Simply call the setStateOfParent function from 
        // prop and pass required argument
        this.props.setStateOfParent(category);
    }
    render() {
        if(this.props.isLoading) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div id='nav-Wrapper'>
                    <div id='nav_logo'>
                        <h1>Fake Store</h1>
                        {this.props.home ?
                            <div className='navDropdown'>
                                <button className="dropbtn">Categories</button>
                                <div className="dropdown-content">
                                    {this.props.categories.map(category => (
                                    <button onClick={() => this.handleClick(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button> 
                                    ))}
                                </div>
                            </div>
                            :
                            <div className='navDropdown'>
                                <Link to='/' className="dropbtn">Home</Link>
                            </div>
                        }
                    </div>
                    <div>
                    {localStorage.getItem('key') ?
                        <Link to='/cart'>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={this.props.numberCart} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        :
                        <div>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </div>
                    }
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    isLoading: state.products.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    categories: state.products.categories,
    numberCart: state.cart.numberCart
})

export default connect(mapStateToProps)(Navbar)
