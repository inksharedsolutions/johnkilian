import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/AuthorPhoto.jpg'
import { Helmet } from "react-helmet";
import {Link} from 'gatsby';


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">John Kilian</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Author | John Kilian"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 				
										 <span className="name">John Kilian </span>
					 				</span>
					 			</div>

					 			<h4>
									{/* Shut your eyes, learn to Love more; and we'll see all we need to know */}
					 			</h4>

					 			{/* <span className="ata-span-fx">author quote</span> */}
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p style={{textAlign: 'justify'}}>
								  John Kilian is a military officer and a former military intelligence analyst. He lives with his family in Middletown, CT, where he is a part-time politician and is best known as the author of Downtown Drive-Thru and the victor as the plaintiff of Kilian v. Bettencourt. He supported the efforts of his friend, the late great Manute Bol, and other Dinkas to achieve the secession of South Sudan from the regime in Khartoum. His inspiration includes Frank Hebert's Dune series.	</p>
		
			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor