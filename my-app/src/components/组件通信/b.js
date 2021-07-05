import React from 'react'

export default class B extends React.Component {
	clickGoods(e) {
		// 在此函数中传入值
		this.props.getPrice(e)
	}
	render() {
		return (
			<div>
				<button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
				<button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
			</div>
		)
	}
}
