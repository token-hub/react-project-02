import React from 'react'
import Form from './Form'
import Axios from 'axios'
import Image from './Image'
import defaulty from '../image/logo512.png'

class QuotesGenerator extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			quote: '',
			final: '',
			pics: [],
			pic: defaulty

		}
	}

	changeHandler = event => {
		this.setState({
			quote: event.target.value
		})
	}

	onSubmitHandler = event => {
		this.setState({ 
			pic: this.state.pics[Math.floor(Math.random() * this.state.pics.length -1)],
			final: this.state.quote
		})
		
		event.preventDefault();
	}

	componentDidMount() {
		Axios.get('https://api.imgflip.com/get_memes')
		.then(response => { 
		 	this.setState({
		 		pics: response.data.data.memes.map( pics => pics.url )
		 	})
		})
		.catch( error => console.log(error) )
	}

	render() {
		const {final, pic} = this.state;

		return (
			<div className='container'>
				<div className='content'>
					
					<div className='left'>
						<Form onSubmitHandler={this.onSubmitHandler} changeHandler={this.changeHandler} quote={this.state.quote} />
					</div>	
					
					<div className='right'>
						<Image source={pic}  quote={final}/>
					</div>	
				</div>

			</div>
		)
	}
}

export default QuotesGenerator