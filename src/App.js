import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import About from './components/pages/About';
import Credits from './components/pages/Credits';
// import Disclainer from './components/Pages/Disclainer';

import Footer from './components/Footer';
import LetestPhoto from './components/LetestPhoto';


function App() {
    return (
        <Router>
            <div className="app">

                <Header></Header>
                <div className="content-bolck">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Route exact path="/" render={props => (
                                    <LetestPhoto></LetestPhoto>
                                )} />
                                <Route path="/single" component={About} />
                                {/* <Route path="/disclainer" component={Disclainer} /> */}
                                <Route path="/credits" component={Credits} />

                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Router>
    );

}


export default App;
