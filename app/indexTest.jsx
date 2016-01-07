var React = require('react'),
Demo2 = require('./Demo2.jsx'),
$ = require('jquery'),
ReactDom = require('react-dom');


class Message extends React.Component {

	// getInitialState(props) {
	// 	super(props);
	//         return {
	// 			isVisiable:false,
	// 			titleMessage:"你好世界",
	// 			clickCount:0
	// 		}
	//     }

	constructor(props) {
		super(props);
		this.state = {
			isVisiable: false,
			titleMessage: "你好世界",
			clickCount: 0
		}
	}


	// TODO: 为什么setState失效，并解决
	handleClick(event) {
		this.setState({
			clickCount: this.state.clickCount + 1,
		})
	}

	render() {
		var style = {
			display:this.state.isVisiable ? 'block' : 'none'
		};
		return (
			<div>
				<h1 style={style}>{this.state.titleMessage}</h1>
				<button onClick = {this.handleClick}>点击我</button>
				<p>你一共点击了:{this.state.clickCount}</p>
				<Demo2 />
			</div>
			)
	}
}



class AppManager extends React.Component {
	componentWillMount() {
		alert(11111);
	}
	render() {
		return ( 
			<div id="testId">
			<h2>测试</h2>
			<Message />
			</div>
			
		)
	}
}



window.MessageBox = ReactDom.render( < AppManager / > , document.querySelector('body'));