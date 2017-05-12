import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import TodoStore from './todostore';

export default class ListItem extends React.Component {
	// constructor(props) {
	//   super(props);
	
	//   // this.state = props;
	// }
	delete(e){
		e.preventDefault();
		TodoStore.deleteItem(this.props.value.id);
		TodoStore.emitChange();
		// console.log(this.props.value)
	}
	render() {
		let item = this.props.value;
		// console.log(item)
		return (
			<li>
				<span>{item.name}</span>
				<button onClick={this.delete.bind(this)}>X</button>
			</li>
		);
	}
}