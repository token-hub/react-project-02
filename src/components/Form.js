import React from 'react'

const Form = ({quote, changeHandler, onSubmitHandler}) => {
	return (
		<form onSubmit={onSubmitHandler}>
			<div>
				<label>Quotes</label><br />
				<input type='text' value={quote} onChange={changeHandler} placeholder='Type quote here...' /><br /><br />
			</div>
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	)
}


export default Form