import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import TodoStore from './todostore';
// import AddItem from './add';

export default class AddItem extends React.Component {
	add(){
		TodoStore.addItem(this.refs.todoTitle.value);
		TodoStore.emitChange();
		this.refs.todoTitle.value = '';
		// console.log(TodoStore)
	}
	render() {
		return (
			<div className="add-todo">
				<input type="text" placeholder="请输入内容" ref="todoTitle" />
				<button className="add-button" onClick={this.add.bind(this)}> add-button </button>
			</div>
		);
	}
}