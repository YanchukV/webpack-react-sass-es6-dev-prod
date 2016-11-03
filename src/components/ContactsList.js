import React, {Component} from 'react';
import Contact from './Contact';

class ContactsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			displayedContacts: this.props.data
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {

		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = this.props.data.filter(function(el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		});
	}

	render() {

		return (
			<div className='contact-box'>
				<input type='text' className='search' placeholder='Search' onChange={this.handleChange}/>
				<ul className='contact'>{this.state.displayedContacts.map(function(el) {
					return (
						<Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} image={el.image}
								about={el.about}/>
					);
				})}</ul>
			</div>
		);
	}

}

export default ContactsList;