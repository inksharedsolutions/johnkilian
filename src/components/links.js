import React from 'react'
import { Link } from 'gatsby'


const link = (props) =>{

 	let Listed = props.arrList.map((e) =>{

		var newUrl = ((e).replace(/[ /]/g, "-").trim().toLowerCase());
        let filterUrl = (newUrl === 'home') ? '/' : newUrl;
		return (
			<li>
				<Link 
					to={filterUrl}>
					{e}
				</Link>
			</li>
		)

	})
	return (
		<>
			{Listed}

			{/* <li><Link to="/">Home</Link></li>
			<li><Link to="/about-the-author">About the Author</Link></li>
			<li><Link to="/books">Books</Link></li>
			<li><Link to="/contact">Contact</Link></li> */}
		</>
	)
}


export default link;