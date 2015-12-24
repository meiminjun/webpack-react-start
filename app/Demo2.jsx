var React = require('react'),
ReactDom = require('react-dom');

var names = ["Alice","Email","meiminjun","liya"];
class Demo2 extends React.Component {
	render() {
		return ( < div >
			<h2>-------数组测试(demo2)-------</h2>
			{
				names.map(function(name) {
					return <li>{name}</li>
				})
			}
			 <div>-------------------------------</div>
			 < /div>

		)
	}
}

module.exports = Demo2;