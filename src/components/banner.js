import React from 'react'
import Insurance from '../assets/img/banner/insurance.png'

const banner = (props) => {


	return(
		<section className="web-banner">
			<div className="container">
				<div className="columns">
					 <div className="column first-banner-column">
					 	<div className="banner-ext-stream">
					 	
						 	{/* <img 
						 		alt="insurance-ext" 
						 		src={Insurance}
						 	/> */}

						 </div>
					  </div>

					  <div className="column is-three-fifths banr-foxtrot-heading">
					  	 <div className="wrapper-banner">
					  	 
							{props.bannerContext}

					     </div>
					  </div>
				</div>
			</div>
		</section>
	)
}

export default banner