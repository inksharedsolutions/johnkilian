import React, {useState, useEffect } from 'react'
import {Link} from 'gatsby'


/*Icons*/
import amazon from '../assets/img/icon-logo/amazon.png'
import barnes from '../assets/img/icon-logo/Barnes-and-noble-booksellers-logo.png'
import stratton from '../assets/img/icon-logo/stratton-logo.png'
import bam from '../assets/img/icon-logo/bam.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Book1 from '../assets/img/books/main_book1.png'
import Book2 from '../assets/img/books/main_book2.png'
import Book3 from '../assets/img/books/main_book3.png'
import Book4 from '../assets/img/books/fled-to-mexico.png'


const Mainbottom = () =>{
	    
    const [mobState, __functState] = useState(false);

	useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

    }, [mobState]); 


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (mobState) ? 1 : 2,
        slidesToScroll: 1,
     };



	return(
		<>
		<section className="main-bottom-section">
			 <div className="container">
			 	<div className="main-bottom-wrapper">
			 		<h1>Featured Books</h1>


            
                    <div className="book-wrapper-slider">
                        <Link to="/books/#adult-milkshake" className="img-link"><img src={Book1} alt="books"/></Link>
						<Link to="/books/#philosophical-poetry" className="img-link"><img src={Book2} alt="books"/></Link>
						<Link to="/books/#noahs-other-ark" className="img-link"><img src={Book3} alt="books"/></Link>
						{/* <Link to="/books/#fled-to-mexico" className="img-link"><img src={Book4} alt="books"/></Link> */}
                    </div>
			 	</div>
			</div>
		</section>

		<div className="feautured-links-logo">

			<p className="featured-param">	
				Hampton Scott Tonk has been featured numerous times on...
			</p>
				
 			<ul>
 				<li><img alt="" src={amazon} /></li>
 				<li><img alt="" src={barnes} /></li>
 				<li><img alt="" src={stratton} /></li>
 				<li><img alt="" src={bam} /></li>
 			</ul>

 		</div>

 	</>
	)
}

export default Mainbottom