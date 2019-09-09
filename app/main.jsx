import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
// import {Provider} from 'react-redux';
import App from './components/app';
import 'babel-polyfill';
import './style/main.less';

// ReactDOM.render(
//   <App/>,
//   document.body.appendChild(document.createElement('div'))
// )

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)



//1.ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
	/*ReactDOM.render(
	  <h1>Hello, world!</h1>,
	  document.getElementById('example')
	);*/
//2.HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写
	// 2.1
	/*var names = ['Alice', 'Emily', 'Kate'];
	ReactDOM.render(
	  <div>
	  {
	    names.map(function (name) {
	      return <div>Hello, {name}!</div>
	    })
	  }
	  </div>,
	  document.getElementById('example')
	);

	// 2.2
	var arr = [
	  <h1>Hello world!</h1>,
	  <h2>React is awesome</h2>,
	];
	ReactDOM.render(
	  <div>{arr}</div>,
	  document.getElementById('example')
	);*/
//3.React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类
	/*let HelloMessage = React.createClass({
			render: function(){
				return <h1 className={this.props.className}>hello,{this.props.className}</h1>;
			}
		});

	ReactDOM.render(
	  <HelloMessage className="bg" />,
	  document.getElementById('example')
	);*/
//4.this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
/*var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});
ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);*/
//5.组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求
/*var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});
//PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。现在
var data = '123';

ReactDOM.render(
  <MyTitle title={data} />,
  document.body
);*/
//6.getDefaultProps方法可以用来设置组件属性的默认值。
/*var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

ReactDOM.render(
  <MyTitle />,
  document.body
);*/
//7.获取真实的DOM节点
/*var MyComponent = React.createClass({
  handleClick: function() {
    let value = this.refs.myTextInput.value;
    console.log(this.refs.myTextInput);
    alert(value)
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);*/
//8.this.state
/*var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});
//this.props 和 this.state 都用于描述组件的特性，
//this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性
ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);*/
//9.表单
/*var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.body);*/
//10.组件的生命周期
	/*组件的生命周期分成三个状态：
		Mounting：已插入真实 DOM
		Updating：正在被重新渲染
		Unmounting：已移出真实 DOM*/
	//React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
/*var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    var num = 0.05;
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= num;
      if (opacity < 0.1||opacity > 1) {
        num = -num;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});
//组件的style属性的设置方式也值得注意，不能写成 style="opacity:{this.state.opacity};" 
//要写成style={{opacity: this.state.opacity}}
//因为 React 组件样式是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象。
ReactDOM.render(
  <Hello name="world"/>,
  document.body
);*/
//11.Ajax 组件的数据来源，通常是通过 Ajax 请求从服务器获取，可以使用 componentDidMount 方法设置 Ajax 请求，等到请求成功，再用 this.setState 方法重新渲染 UI 
/*var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      console.log(this.isMounted())
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.body
);*/
/*var RepoList = React.createClass({
  getInitialState: function() {
    return { loading: true, error: null, data: null};
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});
ReactDOM.render(
  <RepoList
    promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
  />,
  document.body
);*/

/*let Timer = React.createClass({
	getInitialState: function () {
		let ss = new Date().toLocaleTimeString();
		return {time:ss}
	},
	componentDidMount: function(){
		setInterval(function(){
			let ss = new Date().toLocaleTimeString();
			this.setState({
				time:ss
			})
		}.bind(this), 1000)
	},
	render: function() {
		return (
			<h1>{this.state.time}</h1>
		);
	}
});
ReactDOM.render(
	<Timer/>,
	document.getElementById('example')
);*/
/*function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
);*/
// var o = {
//     x : 1,
//     func : function() { console.log(this.x) },
//     test : function() {
//         setTimeout(function() {
//             // this.func();
//             console.log(this)
//         }, 100);
//     }
// };

// o.test();

// var getJSON = function(url) {
//   var promise = new Promise(function(resolve, reject){
//     var client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//   });

//   return promise;
// };

// getJSON("/aa.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });
// console.log(6666)

// bad
// function handleThings(opts) {
//   opts = opts || {};
// }


