import React, { Component } from 'react';
import ContactsList from '../components/ContactsList';
var CONTACTS = [
	{
		id: 1,
		name: 'Коц Пузан',
		phoneNumber: '+250966666666',
		image: 'http://placekitten.com/200/200',
		about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio dolore dolorem fugit'

	}, {
		id: 2,
		name: 'Усатый Лунь',
		phoneNumber: '+250966344466',
		image: 'http://placekitten.com/350/350',
		about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio dolore dolorem fugit'
	}, {
		id: 3,
		name: 'Мурлок Котович',
		phoneNumber: '+250976654433',
		image: 'http://placekitten.com/150/150',
		about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio dolore dolorem fugit'
	}, {
		id: 4,
		name: 'Пушистый Гад',
		phoneNumber: '+250456784935',
		image: 'http://placekitten.com/250/250',
		about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio dolore dolorem fugit'
	}
];

export default class App extends Component {

	render() {
		return (
			<div className='content-wrap'>
				<ContactsList data={CONTACTS}/>
			</div>
		);

	}
}
