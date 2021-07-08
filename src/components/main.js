import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/AuthorPhoto.jpg';

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
				
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							
								<span className="author-fx" />
							</span>
	
					<span className="author-name-tagline">
								Hampton Scott Tonk
								</span>
					<p style={{textAlign: "justify"}}>
					John Kilian is a military officer and a former military intelligence analyst. He lives with his family in Middletown, CT,
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
