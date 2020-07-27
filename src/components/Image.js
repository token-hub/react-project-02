import React from 'react'
import png from '../image/logo512.png'

class Image extends React.Component {
	render() {

		const {source, quote} = this.props;

		console.log(source);
		return(
			<React.Fragment>
				<img src={source} />
				<h3>{quote}</h3>
			</React.Fragment>
		)
	}
}

export default Image