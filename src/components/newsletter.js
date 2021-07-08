import React from 'react'
import '../assets/scss/newsletter.scss'

const newsletter = () =>{
	
	return(
		<div id="bottomWrapper">
			<div className="container">
				<section className="sectionNewsletter">

					<h2 className="newsletterHeading"> Newsletter</h2>
						<div className="containerNewsletter">
							<form onSubmit="">
								  <div className="form-group">
								    <div className="form-text text-muted" id="pbb-letter-cont-nw">Stay up to date with the latest from me</div>
								    <div className="input-group" id="pd-elementor-apex">

										<input 
											type='text' 
											placeholder='Email'
											name='email' 
											className="inputStyles" />

										  <div className="input-group-append">

											<input 
												className="buttonNewsletter" 
												value="Subcribe" 
												type="submit" />
										  </div>

									</div>
								  </div>
							</form>
						</div>
						
				</section>
			</div>
		</div>
	)
}

export default newsletter