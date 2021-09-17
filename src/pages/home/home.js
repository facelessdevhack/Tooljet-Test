import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, getCategories } from '../../redux/actions/products';
import Products from '../../components/products/products';
import './home.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Home extends Component {
    state = {
        categories: [],
        category: ''
    }
    static propTypes = {
        isLoading: PropTypes.bool,
        fetchingFailed: PropTypes.bool,
        productList: PropTypes.array
    }
    componentDidMount() {
        if(this.props.productList.length === 0) {
           return ( this.props.getProducts(),
            this.props.getCategories(), console.log("Fetched") )
        } 
    }
    setStateOfParent = (changedCategory) => {
        this.setState({category: changedCategory});
        console.log(changedCategory)
    }
    filteredList = () => {
        return this.props.productList.filter(product => {
           return this.state.category === "" ? this.props.productList : product.category === this.state.category
        })
    }
    render() {
        if(this.props.isLoading) {
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
        } else {
            return (
                <div>
                    <Navbar home={true} setStateOfParent={this.setStateOfParent}/>
                    <div id='productWrapper'>
                        <Products productList={this.filteredList()} productCategory={this.state.category} />
                    </div>
                </div>
            )
        }
        
    }
}
const mapStateToProps = state => ({
    isLoading: state.products.isLoading,
    fetchingFailed: state.products.fetchingFailed,
    productList: state.products.productList
})
export default connect(mapStateToProps, { getProducts, getCategories })(Home)
