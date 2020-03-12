
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <p>I WORK WORLDWIDE</p>
                                <h2>Hello@domain.com</h2>
                                <p className="numer">(+01) 234. 567.890</p>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="/">facebook</a></li>
                                        <li><a href="/">youtube</a></li>
                                        <li><a href="/">twitter</a></li>
                                        <li><a href="/">linkdin</a></li>
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
