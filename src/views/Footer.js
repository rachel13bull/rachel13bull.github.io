import React, { Component } from 'react';
import Eye from './components/Eye';
import TowerBridge from './components/TowerBridge';
import Tube from './components/Tube';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import twitter from './../assets/images/twitter.png';
import linkedin from './../assets/images/linkedin.png';
import email from './../assets/images/email.png';
import './../assets/css/footer.css';

export default class Footer extends Component {

	render() {
		return (
			<footer>
				<Router>
					<Route component={Tube} />
				</Router>
				<div className="footer__container">
					<p>Rachel Bull 2020</p>
					<Router>
						<Route component={Eye} />
					</Router>
					<Router>
						<Route component={TowerBridge} />
					</Router>
					<ul>
						<li className="twitter">
							<a href="https://twitter.com/rachel_web" rel="nofollow"><img src={twitter} alt="twitter" height="20px" width="auto" /></a>
						</li>
						<li className="linkedin">
							<a href="https://uk.linkedin.com/in/rachel-bull-b3535536" rel="nofollow"><img src={linkedin} alt="linkedin" height="20px" width="auto" /></a>
						</li>
						<li className="email">
							<a href="mailto:rachel13bull@gmail.com?Subject=Exmail%20afrom%20rachel13bull.github.io" rel="nofollow" target="_top"><img src={email} alt="email" height="20px" width="auto" /></a>
						</li>
					</ul>
				</div>
			</footer>
		)
	}
}
