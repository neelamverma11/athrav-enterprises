import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Products from './Products'
import Contact from './Contact';
import Navbar from './Navbar';
import Video from './Video';
import Footer from './Footer';
import { Switch, Route, Redirect } from "react-router-dom";



const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Products" component={Products} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/video" component={Video} />
                <Redirect to="/" />
                <Home />
            </Switch>
            <Footer />
        </>
    )
};

export default App;