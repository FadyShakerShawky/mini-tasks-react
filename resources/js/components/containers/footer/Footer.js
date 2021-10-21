import React, { Component } from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter} from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">

                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="#">Fady Shaker</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li>
                                    <a className="facebook" href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer
