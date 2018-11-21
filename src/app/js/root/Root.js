
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Login from '../auth/login';
import Register from '../auth/register';
import About from '../about/about';
import Contact from '../contact/contact';
import Profile from '../me/profile';
import Home from '../home/home';


// const HomePage = () => <div>This is a Home Page</div>
// const LoginPage = () => <div>This is a Login Page</div>
// const RegisterPage = () => <div>This is a Register Page</div>
// const ProfilePage = () => <div>This is a Profile Page</div>
// const AboutPage = () => <div>This is a About Page</div>
// const ContactPage = () => <div>This is a Contact Page</div>


export default class Root extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <header>
                        <p>React Router v4 Browser Example</p>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/me">Profile</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="container">
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/me" component={Profile} />
                    </div>
                    <footer>
                        React Router v4 Browser Example (c) 2017
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}