import React,{ Component } from 'react'
import 'moment/locale/zh-cn'

import { 
	Button,
	Icon,
	Menu,
	Dropdown,
	Pagination,
	message,
	Checkbox,
	DatePicker,
	Divider,
} from 'antd'

import './index.less'


const { RangePicker} = DatePicker 

class Antd extends Component{
	state = {
		iconLoading:false
	}
	componentWillMount() {
		message.info('页面切换成功');
	}
	enterIconLoading(){

		this.setState(()=>{
			return{
				iconLoading:this.state.iconLoading ? false : true
			}
		})

		setTimeout(()=>{
			this.setState({
				iconLoading:false
			})
		},1000)
	}
	onchange=(pageNumber)=>{
		console.log(pageNumber)
	}

	checkbox = (e)=>{
		console.log(e.target.checked)
	}

	datePicker= (e,dateString)=>{
		console.log(dateString)
	}

	rangePicker=(e,dateString)=>{
		console.log(dateString)
	}

	render() {

		const menu = (
		  <Menu>
		    <Menu.Item key="1">1st item</Menu.Item>
		    <Menu.Item key="2">2nd item</Menu.Item>
		    <Menu.Item key="3">3rd item</Menu.Item>
		  </Menu>
		)

		const info = () => {
		  message.info('充值成功!你很牛逼');
		}

		return (
			<div className='antds'>
				<h3>基础用法</h3>
				
				<div>
					hello antd button
					<Divider dashed/>
					<p>
						<Button type="primary" size="large"> btn-primary large</Button>
						<Button type="primary" size="small"> btn-primary small </Button>
						<Button type="primary"> btn-primary</Button>
						<Button> btn-Default </Button>
						<Button type="dashed"> btn-dashed </Button>
						<Button type="danger"> btn-danger </Button>
						<Button type="dashed" disabled> btn-dashed disabled</Button>
					</p>
					<p>
						<Button type="primary" shape="circle" icon="download"/>
						<Button type="primary" icon="download">Download</Button>
						<Button type="primary">
						    <Icon type="left" />Backward
						</Button>
						<Button type="primary">
						    Forward<Icon type="right" />
						</Button>
					</p>
					<p>
						<Button type="primary" loading>Loading</Button>

						<Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={ this.enterIconLoading.bind(this) }>
						          Click me!
						</Button>
						<Button type="primary" shape="circle" loading />
					</p>

					<Dropdown overlay={menu} trigger={['click']}>
					  <Button>
					    Actions <Icon type="down" />
					  </Button>
					</Dropdown>
				</div>
				
				<div>
					hello antd Pagination
					<Divider dashed/>
					<Pagination defaultCurrent={1} total={50}/>
					<Pagination defaultCurrent={5} total={500}/>
					<Pagination defaultCurrent={5} total={500} showSizeChanger/>
					<Pagination defaultCurrent={5} total={500} showQuickJumper onChange={this.onchange}/>

					<Pagination defaultCurrent={1} total={50} size="small"/>
					<Pagination defaultCurrent={5} total={500} size="small"/>
					<Pagination defaultCurrent={5} total={500} showSizeChanger size="small"/>
					<Pagination defaultCurrent={5} total={500} showQuickJumper onChange={this.onchange} size="small"/>
				</div>
				
				<div>
					hello antd message
					<Divider dashed/>
					<Button type="primary" onClick={info}>Display normal message</Button>

					<Checkbox onChange={ this.checkbox } defaultChecked > Checkbox </Checkbox>

					<DatePicker onChange={this.datePicker} placeholder='请选择开始日期'/>

					<RangePicker onChange={this.rangePicker} placeholder={['xxx','xxx']}/>
				</div>
			</div>
		)
	}
} 

export default Antd