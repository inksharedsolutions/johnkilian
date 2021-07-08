import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/main_book1.png'
import Book2 from '../assets/img/books/main_book2.png'
import Book3 from '../assets/img/books/main_book3.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'hampton-scott-tonk',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Hampton Scott Tonk</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Books</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="Books | Hampton Scott Tonk" />
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
										<h1>God's Opportunity</h1>
									 	<p>Revised and Expanded Edition</p>
								    </div>

									<p>
									It is said that man's extremity is God's opportunity. Christianity, at root, at its finest moments, in the finest sense of the word, is Evangelical, what I call "straight-Gospel Christianity." Straight-Gospel Christians - whether straight-Gospel Protestants or straight-Gospel Catholics or straight-Gospel Anglicans or straight-Gospel Orthodox - can relate to each other in Christ not just well but in some very deep and profound ways whose foundation is fundamentally that of the message of the Gospel of Jesus Christ according to Holy Scripture. They are already practically of one heart and of the one mind for which St. Paul pleaded (see I Corinthians 1:10) in imitation of our Lord's earnest prayer for the unity of His disciples (John 17) concerning the Gospel of our Lord and God and Savior Jesus Christ.
									</p>

									<p>
                                    In fact, St. Paul the Apostle himself - he who was once Saul the fiery and zealous Pharisee (the Pharisees are the ancestors of rabbinical Judaism) testified that in a certain mysterious sense Jews - who, after all, gave us Y'shua - Jesus - whom the early Christians - the followers of "the Way" - proclaimed as the Messiah (Hebrew mashiach) - are the foremost participants in the Mystery of Salvation (See Romans 9-11), for they were the first to proclaim the Gospel of the Kingdom (See, for instance, Isaiah 52:7-10). 
									</p>

									<p>
                                    Therein lies our hope and our opportunity - and, more to the point, God's opportunity - for a Christian unity which will set the world on fire for Christ.


									</p>

									<p>
                                    It's God's time. It's Kingdom time. It's the fullness of time. It's God's opportunity!
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gods-Opportunity-Expanded-Reuniting-Evangelizing-ebook/dp/B08R81527S/ref=sr_1_1?dchild=1&keywords=9781648953057&qid=1609168293&sr=8-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/gods-opportunity-revised-and-expanded-edition-hampton-scott-tonk/1138517724?ean=9781648953057">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gods-Opportunity-Expanded-Reuniting-Evangelizing/dp/1648953042/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1609168293&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/gods-opportunity-revised-and-expanded-edition-hampton-scott-tonk/1138517724?ean=9781648953040">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Gods-Opportunity-Revised-Expanded/Hampton-Scott-Tonk/9781648953040?id=8049069540563&_ga=2.191972778.1023475077.1615324156-2145380449.1604906972#">Books A Million</a></li>
								</nav>
							</div>
						</div>



						<div className="columns" id="philosophical-poetry">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="snowbear" alt="main-book" src={Book2} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>How I Succeeded in Business and in life</h1>
										<p></p>
									</div>

									<p>
									This is the story about how one man unexpectedly went from paycheck-to-paycheck Joe Lunch-bucket to business, salesperson, "C" level executive, entrepreneur, publis speaker, encourage, investor, and philanthropist - all on a shoestring.
									</p>

								</section>
								
								<nav className="booklinkBlocks">
									<span><h4>Coming Soon....</h4></span>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/B08HSP7BH3/ref=sr_1_1?dchild=1&keywords=9781648951756&qid=1599769837&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/philosophical-poetry-chaitanya-das-ma/1137619716?ean=9781648951756">Barnes & Noble</a></li> */}
								</nav>

								{/* <nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Philosophical-Poetry-Chaitanya-Das-Ma/dp/1648951740/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600197365&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/philosophical-poetry-chaitanya-das-ma/1137619716?ean=9781648951749">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Philosophical-Poetry/Chaitanya-Das-Ma/9781648951749?id=8147396224924">Books A Million</a></li>
								</nav> */}
							</div>
						</div>

						<div className="columns" id="noahs-other-ark">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="snowbear" alt="main-book" src={Book3} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>Yes, Lord!</h1>
										<p>A Conversion Story</p>
									</div>

									<p>
									As I sat in the Church of the Holy Cross of St. Leo Benedictine Abbey in St. Leo, Florida, in the late Spring of 2019 comtemplating God and all the wonderful fellow Christians - boon companions along the way - fellow pilgrims and wayfarers - having had the huge blessing and privilege of having experienced literally every Christian tradition from the inside - not to mention my beloved Jews for over 60 yesrs - tears streamed down my face, and I began to sob, my body shaking.
									</p>

									<p>
									Was it because of sadness and regret? No. They were tears of Joy and love of the brethren (I John 3:14). Mere words could not express my overwhelming gratitude.
									</p>


									<p>
									Yes, it was a long, long journey. Do I regret its legnth? Absolutely not! For He led, and I, a sinner, followed - and all the while I said, YES, LORD!
									</p>


									<p>
									Did I fully learned is htat life with God is and adventure. Where and how it will all end, I cannot say. But according to God's Word it ends gloriously - with Satan and Evil destroyed and the world renewed and restored into a rich and pure and innocent Garden of Eden.
									</p>


									<p>
									It ends with Jesus coming with all His Angels and Archangels at the Last Trumpet to judge the living and the dead - and with the Triumph of our Glorious God - in the sight of all living.
									</p>


									<p>
									Will we know it? Yes. You can take that to the bank.
									</p>


									<p>
									Will we understand it? Oh, yes because He will make it plain.
									</p>


									<p>
									In that Day terror will seize the wicked, and in that Day the rigteous will rejoice at His Coming.
									</p>


									<p>
									Prepare. Repent. The Kingdom of God is at hand.
									</p>


									<p>
									Am I looking forward to it? You bet.
									</p>


									<p>
									YES, LORD! AMEN! Come, Lord Jesus! Hallelujah
									</p>


									<p>
									Stick around. The adventure begins.
									</p>

								</section>

								<nav className="booklinkBlocks">
									<span><h4>Coming Soon....</h4></span>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Noahs-Other-Ark-Stephen-Ringler-ebook/dp/B08HVY7DMR/ref=sr_1_1?dchild=1&keywords=9781648951794&qid=1600367669&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/noahs-other-ark-stephen-m-ringler/1137659618?ean=9781648951794">Barnes & Noble</a></li> */}
								</nav>

								{/* <nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Noahs-Other-Ark-Collection-Children/dp/1648951783/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600367695&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/noahs-other-ark-stephen-m-ringler/1137659618?ean=9781648951787">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Noahs-Other-Ark/Stephen-M-Ringler/9781648951787?id=8147396224924">Books A Million</a></li>
								</nav> */}
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
