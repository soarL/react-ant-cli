import React,{ Component } from 'react'
import {
	message,
	Steps,
	Icon,
	Divider,
	Button
} from 'antd'

const Step = Steps.Step


const steps = [{
	title:'第一个',
	content:'第一个坑的内容'
},{
	title:'第二个',
	content:'第二个坑的内容'
},{
	title:'第三个',
	content:'第三个坑的内容'
}]



class Stepse extends Component{
	constructor(props){
		super(props)
		this.state={
			current:0
		}
	}
	componentWillMount() {
		message.info('步骤条')
	}

	next(){
		this.setState({
			current:this.state.current+=1
		})
	}
	prev(){
		this.setState({
			current:this.state.current-=1
		})
	}
	render(){
		return(
			<div className='steps'>
				<Steps>
					<Step status="finish" title="登入" icon={<Icon type="user" />} />
					<Step status="finish" title="完成验证" icon={<Icon type="solution" />} />
					<Step status="process" title="支付" icon={<Icon type="loading" />} />
					<Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
				</Steps>
				<Divider dashed/>
				<Steps current={this.state.current}>
					{
						steps.map(item=><Step key={item.title} title={item.title} />)
					}
				</Steps>
				<div className='content'>
					{steps[this.state.current].content}
				</div>
				<div>
					{
						this.state.current < steps.length - 1 &&
						<Button type='primary' onClick={this.next.bind(this)}>下一步</Button>
					}
					{
						this.state.current === steps.length - 1 && 
						<Button type='primary' onClick={()=>message.success('操作成功')}>完成</Button>
					}
					{
						this.state.current > 0 && 
						<Button type='default' onClick={this.prev.bind(this)}>上一步</Button>
					}
				</div>
				<Divider dashed/>
				<div>
					<Steps current={2} status='error'>
						<Step title='第一步' description="this is a first description"></Step>
						<Step title='第二步' description="this is a second description"></Step>
						<Step title='第三步' description='this is a error option'></Step>
					</Steps>
				</div>
				<Divider dashed/>
				<div>
					<Steps direction='vertical' current={1}>
						<Step title='first' description='this is first description'/>
						<Step title ='second' description='this is second description'/>
						<Step title ='third' description='this is thrid description' icon={<Icon type='smile-o'/>}/>
					</Steps>
				</div>
			</div>
		)
	}
}

export default Stepse