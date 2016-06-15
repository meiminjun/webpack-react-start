var React = require('react'),
ReactDom = require('react-dom');

var names = ["Alice","Email","meiminjun","liya"];
class Demo3 extends React.Component {
	render() {
		return ( < div >
			<h2>-------数组测试(demo3)-------</h2>
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

module.exports = Demo3;