import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"
import { Helmet } from "react-helmet"

const IndexPage = () => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Hampton Scott Tonk</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-2">It's God's time. It's Kingdom's time. It's the fullness of time. It's</span> 
				<span className="banr-spn-highlight">God's Oppotunity!</span>
				
				<Link
					key=""
					className="btn-banner-intro" 
					to="/books#you-can-too">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
			  <Helmet title="Home | Hampton Scott Tonk"/>
	  		 <Banner bannerContext={bannerText} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
