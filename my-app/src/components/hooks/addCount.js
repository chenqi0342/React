import React from 'react'

export default class AddCount extends React.Component {
	//class计数器
	state = {
		count: 0,
	}
	componentDidMount() {
		document.title = `你点击了${this.state.count}次`
		//初始化
	}
	componentDidUpdate() {
		document.title = `你点击了${this.state.count}次`
		//更新后
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
				</button>
			</div>
		)
	}
}
