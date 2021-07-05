import React from 'react'
import B from './b'

export default class A extends React.Component {
	//父组件向子组件传递 props
	//子组件向父组件传递 父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值
	//兄弟组件之间的通信 如果是兄弟组件之间的传递，则父组件作为中间层来实现数据的互通，通过使用父组件传递
	//父组件向后代组件传递 使用context提供了组件之间通讯的一种方式，可以共享数据，其他数据都能读取对应的数据
	//非关系组件传递 非关系组件传递redux


    //通过使用React.createContext创建一个context
    const PriceContext = React.createContext('price')
    //context创建成功后，其下存在Provider组件用于创建数据源，Consumer组件用于接收数据，使用实例如下：
    <PriceContext.Provider value={100}>
    </PriceContext.Provider>
    //如果想要获取Provider传递的数据，可以通过Consumer组件或者或者使用contextType属性接收，对应分别如下：
    <PriceContext.Consumer>
    { /*这里是一个函数*/ }
    {
        price => <div>price：{price}</div>
    }
</PriceContext.Consumer>


	constructor(props) {
		super(props)
		this.state = {
			price: 0,
		}
	}
	getItemPrice(e) {
		this.setState({
			price: e,
		})
	}
	render() {
		return (
			<div>
				<div>price:{this.state.price}</div>
				{/* 向子函数中传入一个函数 */}
				<B getItemPrice={this.getItemPrice.bind(this)}></B>
			</div>
		)
	}
}
