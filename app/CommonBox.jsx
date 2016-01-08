var React = require('react'),
Demo2 = require('./Demo2.jsx'),
$ = require('jquery'),
ReactDom = require('react-dom');

class CommonList extends React.Component {
	render() {
		console.log("---打印CommonList----")
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

// 表单组件
class CommonForm extends React.Component {
	// 提交表单事件
	handleClick(e) {
		e.preventDefault();
		console.log(e);
		console.log(this.refs.author.value);
		const author = this.refs.author.value;
		const body = this.refs.body.value;
		const form = this.refs.form;
		
		console.log(author,body);
		
		// 给他的调用者
		this.props.onSubmit({
			author:author,
			body:body
		});

		form.reset();

	}

	render() {
		return (
			<div>
			<form ref ="form" onSubmit={(e) => {
				this.handleClick(e)
			}}>
				<input type="text" placeholder="Your name" ref ="author"/>
				<input type="text" placeholder="Your body" ref ="body"/>
				<input type="submit" ref="sub" value="提交" />
			</form>
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
	// 使用 getInitialState 方法时，必须是React.createClass创建才会触发
	// getInitialState() {
	//     return {
	//     		comment: [{author:"初始化",body:"初始化"}]
	// 		}
	// }

	loadData() {
		var me = this;
		$.ajax({
			url:me.props.url,
			datatype:"json",
			// 用箭头函数的话，默认绑定到this
			success:res => {
				var commonets = res.response;
				console.log("----打印默认loadData----")
				console.log(commonets);
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
		// this.loadData();
	}
	
	handleNewComment(coments) {
		console.log("---------");
		console.log(coments);
		
		const comments = this.state.comment;
		const newComment = comments.concat([coments]);
		console.log("------打印newComment-----");
		console.log(newComment);
		this.setState({comment:newComment});
		
		setTimeout(()=> {
			$.ajax({
				url:this.props.url,
				datatype:'json',
				type:"POST",
				success:res => {
					this.setState({
						comment:[coments]
					})
				},
				error:(xhr,state,err) => {
					console.log("--失败以后回滚到原来状态---")
					this.setState({
						comment:comments
					})
				}
			});
		},2000);
		

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
			<CommonForm onSubmit={comment => {

				this.handleNewComment(comment)
			}} />
			</div>
			)
	}
}

document.getElementsByTagName('body')[0].innerHTML = '<div id="app"></div>';

window.MessageBox = ReactDom.render( < CommonBox url = "./app/serverData.json"/ > , document.querySelector('#app'));