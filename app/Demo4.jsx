var React = require('react'),
ReactDom = require('react-dom');

class Demo4 extends React.Component {
	render() {
		return ( < div >
			<h2>-------数组测试(demo4)-------</h2>
			
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

module.exports = Demo4;