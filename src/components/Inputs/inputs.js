import React from 'react'

 

const inputs = (props)=> {

 	const initName =  props.name;
 	const toCapitalize = initName.charAt(0).toUpperCase() + initName.slice(1);


	return (
		<label> 
			{toCapitalize} 
			<span className="asterisk">*</span> 

			<input 
				name={initName.toLowerCase()} 
				type={props.type}
				className="formInputs"
				placeholder={toCapitalize} 
				required 
			/>
		</label>
	)
}


export default inputs;