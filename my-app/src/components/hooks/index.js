import React, { useState, useEffect } from 'react'

function Lhook() {
	//什么是hooks
	//hooks是个函数，通过使用hooks让函数组件功能更加丰富
	//有些场景下，使用hooks比类组件更好

	//hooks出现的背景
	//函数式组件不能使用state，ref这些属性，只能通过函数传参的方式使用props
	//没有生命周期钩子

	//类组件的缺点
	//在复杂的组件中，耦合的逻辑代码很难分离
	//监听清理和资源释放问题
	//组件间逻辑复用困难
	//class学习成本

	//useState就是一个hooks,函数式组件是无状态的，使用useState来获取state属性以及修改属性的方法
	//useState为函数组件带来了使用state的能力
	//setCount传入参数是直接覆盖，而setState执行的是对象的合并处理

	//useEffect解决勾子问题，以往所有生命周期函数都被合并成了useEffect

	const [count, setCount] = useState(0)
	useEffect(() => {
		// 更新 title
		document.title = `你点击了 ${count} 次`

		return function () {}
	})
	//可以看到无论是初始化渲染还是更新渲染，useEffect 总是会确保在组件渲染完毕后再执行
	//这就相当于组合了初始化和更新渲染时的生命周期钩子。
	//并且由于闭包的特性，useEffect 可以访问到函数组件中的各种属性和方法。
	//其中 return 的函数是在 useEffect 再次执行前或是组件要销毁时执行，由于闭包，useEffect 中的返回函数可以很容易地获取对象并清除订阅。

	//有些时候并没有必要每次在函数组件重新执行时执行 useEffect，这个时候就需要用到 useEffect 的第二个参数了
	//第二个参数传入一个数组，数组元素是要监听的变量，当函数再次执行时，数组中只要有一个元素与上次函数执行时传入的数组元素不同，那么则执行 useEffect 传入的函数，否则不执行。

	//需要注意的是，对于传入的对象类型，React 只是比较引用是否改变，而不会判断对象的属性是否改变，所以建议依赖数组中传入的变量都采用基本类型。

	//useMemo 会返回一个“记忆化”的结果，执行当前传入的函数并返回结果值给声明的变量，且当依赖没变化时返回上一次计算的值。
	//  componentDidUpdate(prevProps, prevState) {
	// if (prevProps.dateRange != this.props.dateRange) {
	// 	const newData = getDataWithinRange(this.props.dateRange)
	// 	this.setState({data: newData})
	//   }
	//   if (prevProps.margins != this.props.margins) {
	// 	this.setState({dimensions: getDimensions()})
	//   }
	//   if (prevState.data != this.state.data) {
	// 	this.setState({xScale: getXScale()})
	// 	this.setState({yScale: getYScale()})
	//   }
	// }

	//  const data = useMemo(() => (
	// getDataWithinRange(dateRange)
	// ), [dateRange])
	// const dimensions = useMemo(getDimensions, [margins])
	// const xScale = useMemo(getXScale, [data])
	// const yScale = useMemo(getYScale, [data])
	return (
		<div>
			<p>you click {count} times</p>
			<button onClick={() => setCount(count + 1)}>clike me</button>
		</div>
	)
}
export default Lhook
