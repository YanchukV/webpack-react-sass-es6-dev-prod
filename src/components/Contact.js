import React, { Component } from 'react';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	readmoreClick(event) {

		event.preventDefault();

		if( this.state.visible === false ) {
			this.setState({ visible: true });
		} else {
			this.setState({ visible: false });
		}

	}

	render() {

		let visible = this.state.visible;

		return(
			<li className='contact__item' >
				<img className='contact__img' src={this.props.image} width='100px' height='100px' />
				<div className='contact__name'>{this.props.name}</div>
				<div className='contact__num'>{this.props.phoneNumber}</div>
				<button className='contact__btn' onClick={this.readmoreClick.bind(this)}>Подробнее</button>
				<div className={'contact__about' + (visible ? '' : ' none')}>{this.props.about}</div>
			</li>
		);
	}

}

export default Contact;
