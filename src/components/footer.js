import React from 'react';
import { Link } from 'gatsby';
import { faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Navlist from './links';
import FooterLogo from '../assets/img/icon-logo/logo.png';

const footer = (props) => {
	return (
		<footer className="footer-section">
			<div className="container">
				<div className="columns navlist-footer-column">
					<div className="column text-center trademark-heading">
						<div className="logo-footer-container">
							<span className="images-portray">
								<img alt="footer-logo" src={FooterLogo} />
							</span>

							{/* <h1>John Kilian</h1> */}
						</div>

						<p>
							John Kilian loves to hear from readers. You can reach him via email. Feel free to send
							questions about writing, his works, interviews and other publicity matters.
						</p>
					</div>

					<div className="column">
						<nav className="footer-nav-list">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about-the-author">About the Author</Link></li>
							<li><Link to="/books">About the Book</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</nav>
					</div>
				</div>

				<div className="columns">
					<div className="column">
						<span className="footer-copyright">
							<span className="footer-year">{new Date().getFullYear()}</span>
							&#169; Copyright. Stratton press
						</span>

						<span className="lower-nav-footer">
							<li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
							<li><Link to="/privacy-policy">Privacy Policy</Link></li>
						</span>
					</div>

					<div className="column text-center trademark-heading">
						<nav id="style_soc_medias">
							<a
								href="https://www.facebook.com/John-Kilian-109581777894128"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="font-awesome" icon={faFacebook} />
							</a>

							<a href="https://twitter.com/strattonpress/" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon className="font-awesome" icon={faTwitter} />
							</a>

							<a
								href="https://www.instagram.com/strattonpress/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="font-awesome" icon={faInstagram} />
							</a>

							<a
								href="https://www.goodreads.com/book/show/57071990-gospels-of-the-new-nile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="font-awesome" icon={faGoodreads} />
							</a>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
