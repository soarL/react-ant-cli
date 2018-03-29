import React,{ Component } from 'react'
import {
	message,
	Carousel
} from 'antd'
import './index.less'

class Carousels extends Component{

	constructor(props){
		super(props)
		message.info('轮播图')
	}

	render(){
		return(
			<Carousel autoplay effect="fade">
				<div><h3>1</h3></div>
			    <div><h3>2</h3></div>
			    <div><h3>3</h3></div>
			    <div><h3>4</h3></div>
			    <div><h3>4</h3></div>
			</Carousel>
		)
	}
}

export default Carousels