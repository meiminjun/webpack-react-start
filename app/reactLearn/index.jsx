var React = require('react'),
ReactDom = require('react-dom');

class AppManager extends React.Component {
	render() {
		return ( <div>
			测试一个东西机型2111111
			</div>
		)
	}
}

ReactDom.render( < AppManager / > , document.querySelector('body'));