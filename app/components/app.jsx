import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import Todolist from './todolist';
import AddItem from './add';

export default class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1>todolist</h1>
				<Todolist/>
				<AddItem/>
			</div>
		);
	}
}