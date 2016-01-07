var React = require('react'),
Demo2 = require('./Demo2.jsx'),
$ = require('jquery'),
ReactDom = require('react-dom');




class CommonList extends React.Component {
	render() {
		console.log(this.props.comments);
		var commentsNode = this.props.comments.map(function(comment,index) {
			return (
				<Common author={comment.author} key={'common-'+index} >
					{comment.body}
				</Common>
			)
		});
		return (
			<div>
			<h2> CommonList</h2>
			{commentsNode}
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

var comment = [
	{author:"meiminjun222",body:"this is my body"},
	{author:"meiminjun222",body:"this is my body"},
	{author:"meiminjun222",body:"这是一个内容页面2222"},
	{author:"meiminjun222",body:"这是一个内容页面"}
];

var other = [
	{author:"meiminjun222",body:"this is my body"},
];


class CommonBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment:props.comment || []
		}
	}
	
	loadData() {
		var me = this;
		$.ajax({
			url:me.props.url,
			datatype:"json",
			// 用箭头函数的话，默认绑定到this
			success:res => {
				var commonets = res.response;
				this.setState({
					comment:commonets
				})
			},
			error:(xhr,states,err) => {
				console.log("出错了");
			}

			// success:function(res) {
			// 	console.log(this);
			// 	var commonets = res.response;
			// 	me.setState({
			// 		comment:commonets
			// 	})
			// }
		});
	}

	componentDidMount() {
		this.loadData();
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
			<CommonList comments= {this.state.comment} />
			<CommonForm />
			</div>
			)
	}
}

document.getElementsByTagName('body')[0].innerHTML = '<div id="app"></div>';

window.MessageBox = ReactDom.render( < CommonBox url = "./app/serverData.json"/ > , document.querySelector('#app'));