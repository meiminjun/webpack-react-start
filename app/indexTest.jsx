var React = require('react'),
Demo2 = require('./Demo2.jsx'),
ReactDom = require('react-dom');

class AppManager extends React.Component {
	render() {
		var messageArr = [];
		for(var ii = 0;ii<10;ii++) {
			messageArr.push(
			<Demo2 />
			)
		}
		return ( 
			<div>
				测试一个东西机型222
				{messageArr}
			</div>
		)
	}
}



ReactDom.render( < AppManager / > , document.querySelector('body'));