var React = require('react'),
Demo2 = require('./Demo2.jsx'),
ReactDom = require('react-dom');

console.log(Demo2);

class AppManager extends React.Component {
	render() {
		return ( < div >
			测试一个东西机型
			<Demo2 ref="namesList"/>
			< /div>
		)
	}
}

ReactDom.render( < AppManager / > , document.querySelector('body'));