import React,{ Component } from 'react'
import {
	message,
	Alert as AlertAntd,
	Button,
	Modal,
	Popconfirm,
	Spin,
	BackTop,
	Divider,
	Tooltip
} from 'antd'

import './index.less'

const confirm = Modal.confirm
class Alert extends Component {
	constructor(props){
		super(props)
		this.state={
			visible:false,
			visibles:false,
			loading:false,
			spinning:false
		}
	}
	showModal(){
		this.setState({
			visible:true
		})
	}
	showModals(){
		this.setState({
			visibles:true
		})
	}
	componentWillMount() {
		message.info('欢迎来到弹窗组件')
	}
	handleOk(e,y){
		message.info('您选择了确定')
		if(!y){
			this.setState({
				loading:true
			})
			setTimeout(()=>{
				this.setState({
					loading:false,
					visibles:false
				})
			},2000)
		}else{
			this.setState({
				visible:false
			})
		}
	}
	handCancel(e){
		message.info('你选择取消')
		this.setState({
			visible:false,
			visibles:false
		})
	}
	showConfirm(){
		confirm({
		    title: 'title?',
		    content: '这是一个异步的按钮',
		    okText:'确定',
		    cancelText:'取消',
		    onOk() {
		      return new Promise((resolve, reject) => {
		        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
		      }).catch(() => console.log('Oops errors!'));
		    },
		    onCancel(){},
		})
	}
	success(){
		Modal.success({
		    title: 'This is a notification message',
		    content: (
		      <div>
		        <p>some messages...some messages...</p>
		        <p>some messages...some messages...</p>
		      </div>
		    ),
		    onOk() {},
		});
	}
	info(){
		Modal.info({
		    title: 'This is a notification message',
		    content: (
		      <div>
		        <p>some messages...some messages...</p>
		        <p>some messages...some messages...</p>
		      </div>
		    ),
		    onOk() {},
		});
	}
	warning(){
		Modal.warning({
		    title: 'This is a notification message',
		    content: (
		      <div>
		        <p>some messages...some messages...</p>
		        <p>some messages...some messages...</p>
		      </div>
		    ),
		    onOk() {},
		});
	}
	error(){
		Modal.error({
		    title: 'This is a notification message',
		    content: (
		      <div>
		        <p>some messages...some messages...</p>
		        <p>some messages...some messages...</p>
		      </div>
		    ),
		    onOk() {},
		});
	}
	spinLoading(){
		this.setState({
			spinning:true
		})

		setTimeout(()=>{
			this.setState({
				spinning:false
			})

		},2000)
	}
	render(){
		return(
			<div className="alerts">

  				<div className="height-20px" />

				信息提示
				<Divider dashed/>
				<div>
					 <AlertAntd 
					 	message="success"
					 	type="success" 
					 	/>
					 <Divider dashed />
					 <AlertAntd 
					 	message="Success" 
					 	type="success" 
					 	showIcon
					 	closable 
					 	/>
					 <Divider dashed />
					 <AlertAntd 
					 	message="info"
					 	type="info" 
					 	closable
					 	showIcon/>
					 <Divider dashed />
					 <AlertAntd 
					 	message="warning"
					 	type="warning" 
					 	closable
					 	showIcon/>
					 <Divider dashed />
					 <AlertAntd 
					 	message="error"
					 	type="error" 
					 	closable
					 	showIcon/>
					<Divider dashed />
					<AlertAntd 
						message="Success"
						description = "成功" 
						type="success" 
						showIcon
						closable 
						/>
					<Divider dashed />
					<AlertAntd 
						message="info"
						description = "提示信息" 
						type="info" 
						closable
						showIcon/>
					<Divider dashed />
					<AlertAntd 
						message="warning"
						description = "警告信息" 
						type="warning" 
						closable
						showIcon/>
					<Divider dashed />
					<AlertAntd 
						message="error"
						description = "错误信息" 
						type="error" 
						closable
						showIcon/>
					<Divider dashed />
				</div>
				对话框
				<Divider dashed/>
				<div>
					<Button type='primary' onClick={this.showModal.bind(this)}>基本对话框</Button>
					<Modal
						title='基本对话框'
						visible={this.state.visible}
						onOk={this.handleOk.bind(this,'1')}
						onCancel={this.handCancel.bind(this)}
						okText='确定'
						cancelText='取消'>
						基本对话框的内容
					</Modal>

					<Divider dashed />

					<Button type='primary' onClick={this.showModals.bind(this)}>自定义按钮的对话框</Button>
					<Modal
						title='自定义按钮的对话框'
						visible={this.state.visibles}
						footer={[
							<Button key="down" loading>放着玩的</Button>,
							<Button key="back" onClick={this.handCancel.bind(this)}>取消</Button>,
						    <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk.bind(this)}>提交</Button>,
						 ]}>
						这是一个异步对话框
					</Modal>
					
					<Divider dashed />

					<Button onClick={this.showConfirm.bind(this)}>
					   快速询问对话框
					</Button>

					<Button onClick={this.info}>Info</Button>
					<Button onClick={this.success}>Success</Button>
					<Button onClick={this.error}>Error</Button>
					<Button onClick={this.warning}>Warning</Button>
				</div>


				气泡确认框
				<Divider dashed/>
				<div>
					<Popconfirm title="要赞助我嘛?" onConfirm={()=>(message.success('感谢您的100大洋'))} onCancel={()=>(message.error('取消操作'))} okText="Yes" cancelText="No">
					    <Button type='primary'>赞助</Button>
					</Popconfirm>
				</div>

				加载中
				<Spin tip="Loading..." spinning={this.state.spinning}>
				  <AlertAntd
				    message="Alert message title"
				    description="Further details about the context of this alert."
				    type="info"
				  />
				</Spin>
				<Divider dashed />
				<Button type='primary' onClick={this.spinLoading.bind(this)}>加载信息</Button>

				<BackTop />
				<Divider dashed />
				<Tooltip title="is very good">
				    <span>Tooltip will show when mouse enter.</span>
				</Tooltip>
			</div>
		)
	}
}

export default Alert