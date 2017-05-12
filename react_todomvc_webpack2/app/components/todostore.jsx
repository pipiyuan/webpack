import {EventEmitter} from 'events';
// import assign from 'object-assign';

const TodoStore = Object.assign({}, EventEmitter.prototype, {
	todoItems: {
		items:[
			{id:1, name:66},
			{id:2, name:666}
	
		]
	},

	getAll() {
		// console.log(Object.assign)
		// console.log(this)
	    return this.todoItems;
	},

	emitChange() {
	    this.emit('change');
	},

	addChangeListener(callback) {
		// console.log(callback)
	    this.on('change', callback);
	},

	removeChangeListener(callback) {
	    this.removeListener('change', callback);
	},

	addItem(value){
		if (this.todoItems.items.length) {
			let newItem = {
				id: '',
				name: ''
			}			
			newItem.id = this.todoItems.items[this.todoItems.items.length-1].id + 1;
			newItem.name = value;
			this.todoItems.items.push(newItem);
			console.log(newItem)
		}else{
			this.todoItems.items = [];
			this.todoItems.items.push({
				id: 1,
				name: value
			});
		}
	},

	deleteItem(id) {
		// console.log(id)
	    this.todoItems.items = this.todoItems.items.filter((listItem) => listItem.id !== id);
	}
});

export default TodoStore;

