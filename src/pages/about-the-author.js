import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/AuthorPhoto.png'
import { Helmet } from "react-helmet";
import {Link} from 'gatsby';


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Hampton Scott Tonk</span>
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
			<Helmet title="About the Author | Hampton Scott Tonk"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Hampton Scott Tonk
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
                                  Hampton Scott Tonk holds a Bachelor of Arts from DePauw University (1965) and a Master of Divinity degree from the Episcopal Theological (in 1974 “Divinity”) School in Cambridge, Massachusetts (1972 – which later merged with Union Theological Seminary in New York City). 
								</p>

								<p style={{textAlign: 'justify'}}>
								He spent the first years of his Christian life as a Protestant (chiefly Congregationalist but later as an evangelical Lutheran and as a member of the Assemblies of God) and is also familiar – from the inside - with most of the major Protestant denominations. 
								</p>

								<p style={{textAlign: 'justify'}}>
								On August 9, 1955 at a United Church of Christ summer camp in Sawyer, Michigan, while sitting under a tree quietly reading the Scriptures he came to faith in Jesus Christ and confessed Him as his Lord and Savior.  He was only 11 years old at the time. 
								</p>

								<p style={{textAlign: 'justify'}}>
								He then spent 26 years in the Episcopal [Anglican] Church, serving for 12 of those 26 years as a member of the Episcopal clergy.
								</p>

								<p style={{textAlign: 'justify'}}>
								He then spent 23 years in the Orthodox Church.
								</p>

								<p style={{textAlign: 'justify'}}>
								Since his teens he has laughed with, studied with, fellowshipped with, had fun with and prayed with the Jewish people and in the process has learned how fundamentally and amazingly Jewish are Christianity’s roots.
								</p>

								<p style={{textAlign: 'justify'}}>
								Simultaneously – since 1959 - he was also fascinated by the Roman Catholic Church, into which he was received on December 8 of 2017, the Solemnity of the Immaculate Conception of the Blessed Virgin Mary, Mother of Our Lord Jesus Christ and Patron Saint of the United States of America.
								</p>

								<p style={{textAlign: 'justify'}}>
								He was formally educated in Latin, German, and New Testament Greek and can speak French, Spanish and Italian as well.
								</p>

								<p style={{textAlign: 'justify'}}>
								In 2007 he founded a ministry called “Share the Word Ministries,” a ministry consecrated to unity among Christians and Jews and the evangelization of the world.  
								</p>

								<p style={{textAlign: 'justify'}}>
								He is also the author of a forthcoming book entitled YES, LORD!  A Conversion Story.
								</p>

								<p style={{textAlign: 'justify'}}>
								His third book will be entitled How I Became Successful in Business and in Life – and Why My Failures, Mistakes, and Experiences of Being Fired Were the Best Things That Ever Happened to Me.
								</p>

								<p style={{textAlign: 'justify'}}>
								He is a listee in the 2019-2020 edition of Who’s Who in America.  The press release on the Google search engine can be found using the link <a href="https://www.24-7pressrelease.com/press-release/465399/hampton-tonk-celebrated-for-dedication-to-the-fields-of-business-and-ministry" target="_blank">https://www.24-7pressrelease.com/press-release/465399/hampton-tonk-celebrated-for-dedication-to-the-fields-of-business-and-ministry</a>.  
								</p>

								<p style={{textAlign: 'justify'}}>
								He was born in St. Louis, lived in the Chicago area for most of his life and has two sons, Seth and Noah.  After a long career in Sales and as an Episcopal priest, business executive, entrepreneur, and management consultant, he now lives in the Fort Myers, Florida area.  He is also a grateful veteran of service in the United States Army and loves to sing karaoke as an amateur and professionally.
								</p>

								<p style={{textAlign: 'justify'}}>
								10% of all royalties derived from this book will be given to charity.
								</p>
			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor