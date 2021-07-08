import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/AuthorPhoto.png';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Hampton Scott Tonk
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p style={{textAlign: "justify"}}>
                    Hampton Scott Tonk holds a Bachelor of Arts from DePauw University (1965) and a Master of Divinity degree from the Episcopal Theological (in 1974 "Divinity") School in Cambridge, Massachusetts (1972 – which  later merged with Union Theological Seminary in New York City).
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
