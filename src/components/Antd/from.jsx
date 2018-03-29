import React,{ Component } from 'react'
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
	message,
	Switch,
} from 'antd'

import SmsCodeInput from '@/components/SmsCodeInput'

import * as verify from '@/config/verify-rule.js'
import APIHome from '@/api/home'


const FormItem = Form.Item


class WrapFrom extends Component {

	// 异步
	async sendCode(){
		// let phone = this.props.form.getFieldValue('smsCode')
		let data = await APIHome.getData()
		return data.data[1].newsName
	}

	render(){

		const { getFieldDecorator,getFieldsError } =this.props.form 

		const handleSubmit = (e)=>{
		    e.preventDefault() // 不跳转
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		        message.success('成功发送：'+JSON.stringify(values));
		      }
		  })
		}

		return(
			<Form onSubmit={handleSubmit}>
				<FormItem hasFeedback>
				{
					getFieldDecorator('user',{
						rules:verify.user
					})(<Input prefix={<Icon type='user'/>} style={{color:'rgba(0,0,0,0.25)'}} type='text' placeholder='请输入用户名'/>)
				}
				</FormItem>		

				<FormItem hasFeedback>
				{
					getFieldDecorator('password',{
						rules:verify.password
					})(<Input prefix={<Icon type='lock'/>} type='password' placeholder="请输入123456"/>)
				}
				</FormItem>

				<FormItem hasFeedback>
		          {getFieldDecorator('email', {
		            rules: verify.email,
		          })(<Input placeholder='请输入您的邮箱'/>)}
				</FormItem>

				<SmsCodeInput
					placeholder='请输入验证码' 
					prefix={<Icon type='phone'/>}  
					btntype='primary' 
					second={ 60 } 
					getFieldDecorator={ getFieldDecorator } 
					getFieldDecoratorAGM={[
						"smsCode",{rules:verify.smsCode}
						]} callback={this.sendCode}
					/>

				<FormItem>
				{
					getFieldDecorator('youhui',{
						rules:[{
							validator:verify.isChecked("请同意使用优惠卷"),
						}]
					})(<Switch/>)
				} 使用优惠卷
				</FormItem>
				<FormItem >
			      {getFieldDecorator('remember', {
			      	valuePropName: 'checked',
			      	initialValue: true,
		            rules:[{
		            	validator:verify.isChecked("请勾选阅读并同意用户协议"),
		            }]
		          })(<Checkbox>阅读并同意</Checkbox>)}
				</FormItem>

				<FormItem>
					<Button 
						type='primary'
						disabled={verify.isDisabled(getFieldsError())}
						htmlType='submit'>
						登入
					</Button>
				</FormItem>
			</Form>
		)
	}
} 


const WrappedHorizontalLoginForm = Form.create()(WrapFrom)

export default WrappedHorizontalLoginForm