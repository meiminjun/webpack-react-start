var React = require('react'),
Demo2 = require('./Demo2.jsx'),
$ = require('jquery'),
ReactDom = require('react-dom');

class CommonList extends React.Component {
	render() {
		return (
			<div>
			<h2> CommonList</h2>
			<Common author="梅敏君" >
				This is my Common1
			</Common>
			<Common author="梅敏君2" >
				This is my Common2
			</Common>
			</div>
			)
	}
}


// 在子组件引用其属性的值是用 this.props 对象获取,用this.props.children获取对象组件内的内容
class Common extends React.Component {
	render() {
		return (
		<div>
			<div className = "common-body">{this.props.children}</div>
			<div className = "common-author">{this.props.author}</div>
		</div>
		)
	}
}

class CommonForm extends React.Component {
	render() {
		return (
			<div>
			<h2> CommonForm</h2>
			</div>
			)
	}
}
class CommonBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisiable: false,
			titleMessage: "你好世界",
			clickCount: 0
		}
	}
	// TODO: 为什么setState失效，并解决
	// handleClick(event) {
	// 	this.setState({
	// 		clickCount: this.state.clickCount + 1,
	// 	})
	// }
	render() {
		return (
			<div>
			<h1>我是一个评论框</h1>
			<CommonList />
			<CommonForm />
			</div>
			)
	}
}

document.getElementsByTagName('body')[0].innerHTML = '<div id="app"></div>';

window.MessageBox = ReactDom.render( < CommonBox / > , document.querySelector('#app'));