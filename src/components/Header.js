import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logo col-auto my-auto">
                                <Link to="/"><h1>Unsplash</h1></Link>
                            </div>
                            <div className="col my-auto text-center">
                                <div className="mainmenu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
