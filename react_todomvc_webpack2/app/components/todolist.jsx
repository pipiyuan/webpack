import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import TodoStore from './todostore';
import ListItem from './listitem';

export default class Todolist extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = TodoStore.getAll();
	}

	componentDidMount(){
		// console.log(this._onChange)
		TodoStore.addChangeListener(this._onChange.bind(this));
	}

	_onChange() {
	    this.setState(TodoStore.getAll());
	}

	render() {
		let arr = this.state.items;
		let List = arr.map(item => {
			// console.log(item.name)
				return (
					<ListItem key={item.id} value={item}/>
				);
			});
		return (
			<div className='list'>
				<ul>
					{List}
				</ul>
			</div>	
		);
	}
}