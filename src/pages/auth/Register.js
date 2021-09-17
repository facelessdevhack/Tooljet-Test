import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { register  } from '../../redux/actions/auth';
import './styles/register.css';

export class Register extends Component {
    state = {
        email: '',
        password:'',
        username: '',
        firstname: '',
        lastname: '',
        city: '',
        street: '',
        number: '',
        phone: ''
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.email,
            this.state.password);
    };
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        if (localStorage.getItem("key")) {
            return <Redirect to='/' />
        }
        const { 
            email, 
            password,
            username,
            firstname,
            lastname,
            city,
            street,
            number,
            phone
         } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div id='login_wrapper'>
                        <div id='overlay'>
                            <div id='logo_wrapper'>
                                <h1>Fake Store</h1>
                            </div>
                            <div id='register-welcometext'>
                                <p><span>Welcome to My Fake Store</span></p>
                                <p><span>Buy Anything, Get Nothing</span></p>
                            </div>
                            <div id='registerForm'>
                                <p>Email address</p>
                                <input value={email} name='email' onChange={this.onChange} placeholder='input your email address' />
                                <p>Username</p>
                                <input value={username} name='username' onChange={this.onChange} placeholder='Username' />
                                <p>First Name</p>
                                <input value={firstname} name='firstname' onChange={this.onChange} placeholder='input your FirstName' />
                                <p>Last Name</p>
                                <input value={lastname} name='lastname' onChange={this.onChange} placeholder='input your email address' />
                                <p>Password</p>
                                <input type='password' onChange={this.onChange} value={password} name="password" placeholder='input your password' />
                                <p>City</p>
                                <input type='text' onChange={this.onChange} value={city} name="city" placeholder='input your City' />
                                <p>Street</p>
                                <input type='text' onChange={this.onChange} value={street} name="street" placeholder='input your Street Address' />
                                <p>House No</p>
                                <input type='text' onChange={this.onChange} value={number} name="number" placeholder='input your House Number' />
                                <p>Phone Number</p>
                                <input type='text' onChange={this.onChange} value={phone} name="phone" placeholder='input your Phone Number' />
                            </div>

                            <div id='login_btn_wrapper'>
                                <input type="submit" value="CONTINUE" />
                            </div>
                            <div id='login_create_wrapper'>
                                <p>Don't have an account?</p>
                                <Link to='/login'>Login</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register)
