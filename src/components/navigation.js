import React from 'react';
import { Link } from 'gatsby';
import Navlist from './links';
import MainLogo from '../assets/img/icon-logo/logo.png';

class Navigation extends React.Component {
	constructor() {
		super();
		this.state = { screenWidth: null };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowDimensions());
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		const isMobile = window.innerWidth < 990 ? true : false;
		this.setState({ screenWidth: isMobile });
	}

	render() {
		return (
			<nav className="main-navigation">
				{/* {this.state.screenWidth && ( */}
					<div className="mobileNav">
						<nav role="navigation">
							<div id="menuToggle">
								<input type="checkbox" />

								<span />
								<span />
								<span />

								<ul id="menu">
									<li><Link to="/">Home</Link></li>
									<li><Link to="/about-the-author">About the Author</Link></li>
									<li><Link to="/books">Books</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
							</div>
						</nav>
					</div>
				{/* )} */}

				<div className="container">
					<div className="grid-blocks-nav">
						<div className="grid-block-child">
							<div className="logo-container-fx">
								<Link to={'/'}>
									<img src={MainLogo} alt="author-logo"/>
							
								</Link>
							</div>
						</div>

						<div className="grid-block-child align-right" id="main-navigation">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about-the-author">About the Author</Link></li>
							<li><Link to="/books">About the Book</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;
