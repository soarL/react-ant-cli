import React,{ Component } from 'react'
import { connect } from 'react-redux'
import homeApi from '@/api/home'
import { onchange , back } from '@/actions/home'
import { 
	Button,
	Divider,
} from 'antd'

import './index.less'

class Home extends Component{
	async hhs(){
		let aff = await homeApi.getData()
		this.props.onchange(aff.data[0].newSketch)
	}
	render(){
		return(
			<div>
				这是home页面
				<Divider dashed/>
				<span>这是通过redux 传来的值 : <span className='red-font'>{ this.props.homeReducer.value }</span></span>
				<Button type='primary' onClick={ this.hhs.bind(this) }>点击我获取异步的数据</Button>&nbsp;&nbsp;&nbsp;&nbsp;
				<Button type='primary' onClick={this.props.back.bind(this,'xxxxxx')}>点我获取同步的数据</Button>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return state
}

export default connect(mapStateToProps,{
	onchange,
	back
})(Home)