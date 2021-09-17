import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import './styles/login.css';

class Login extends Component {
    state = {
        email: '',
        password:''
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email,
            this.state.password);
    };
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        if (localStorage.getItem("key")) {
            return <Redirect to='/' />
           }
        const { email, password } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                        <div id='login_wrapper'>
                            <div id='overlay'>
                                <div id='logo_wrapper'>
                                    <h1>Fake Store</h1>
                                </div>
                                <div id='login-welcometext'>
                                    <p><span>Hi there,</span><br />Nice to see you again</p>
                                </div>
                                <div id='login-input'>
                                    <p>Email address</p>
                                    <input value={email} name='email' onChange={this.onChange} id='login-email' placeholder='input your email address' />
                                    <p>Password</p>
                                    <input type='password' id='login-email' onChange={this.onChange} value={password} name="password" placeholder='input your password' />
                                </div>
                                <div id='login_btn_wrapper'>
                                    <input type="submit" value="LOGIN" />
                                </div>
                                <div id='login_create_wrapper'>
                                    <p>Don't have an account?</p>
                                    <Link to='/register'>Create</Link>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
