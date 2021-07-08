import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/main_book1.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'john-kilian',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">John Kilian</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Book</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="Books | John Kilian" />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns" id="adult-milkshake">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="you-can-too" alt="main-book" src={Book} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>Gospels of the New Nile</h1>
								    </div>

									<p>
									Over time, everything changes. Politics, religion, and cultural institutions are founded, grow, and perish as humanity marches through the centuries as a perpetual work in progress. Can we deny a similar fate for all that we know and consider sacred today?
									</p>
									<p>
									Throughout the ages, the written works of Scripture have provided a rich history of ancient people. The events of times past as recorded in these texts reveal that in times that were incomparable to today, there lived people that are nevertheless all too familiar.
									</p>
									<p>
									Religious works are written and read through a prism of faith. How much of the truth navigates this filtration is an open question. This combination of fact and faith creates the beliefs of people. The prevalent beliefs of society evolve with the ebb and flow of faith among its members. The facts of the matter may be immutable, but our understanding of the meaning of the known world yields to the less objective realm of belief. Those who take the lead in governing the beliefs of others are soon exempt from review by rational standards. In such times, anything that is believed can be conceived.
									</p>
									<p>
								This book takes us on a journey through time to a point in the future when all that exists today has suffered from the exacting toll time takes on the works of mere mortals. Nothing humans create, believe, or otherwise conceive stands this test of time. Only human nature continues unabated, endlessly pitting the need of individuals for freedom against society's need for order.	
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gospels-New-Nile-John-Kilian-ebook/dp/B08WJNMBNC/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1625713990&sr=8-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/gospels-of-the-new-nile-john-p-kilian/1005157593?ean=9781648953217">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gospels-New-Nile-John-Kilian/dp/1648953204/ref=sr_1_1?keywords=Gospels+of+the+New+Nile&qid=1625714155&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/gospels-of-the-new-nile-john-p-kilian/1005157593?ean=9781648953200">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Gospels-New-Nile/John-Kilian/9781648953200?id=8255501074287">Books A Million</a></li>
								</nav>
							</div>
						</div>



		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor
