import React,{ Component } from 'react'
import {
	message,
	Divider,
	Upload,
	Button,
	Icon,
	Modal
} from 'antd'

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const fileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const Dragger = Upload.Dragger;

class Uploads extends Component{
	constructor(props){
		super(props)
		this.state={
			previewVisible: false,
			previewImage: '',
			fileList: [{
			  uid: -1,
			  name: 'xxx.png',
			  status: 'done',
			  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}]
		}
		message.info('文件上传')
	}
	handleCancel(){
		this.setState({ previewVisible: false })
	}

	handlePreview (file){
	    this.setState({
	      previewImage: file.url || file.thumbUrl,
	      previewVisible: true,
	    });
	  }

	handleChange({ fileList }) {
		this.setState({ fileList })
	}

	render(){
		const uploadButton= (
			<div>
				<Icon type='plus'/>
				<div>选择图片</div>
			</div>
		) 
		return(

			<div>
				click upload
				<Divider dashed/>
				<div>
					<Upload {...props}>
						<Button type='primary'>
							<Icon type='upload'/>上传
						</Button>
					</Upload>
				</div>
				<Divider dashed/>
				<div>
					<Upload {...props2}>
						<Button type='primary'>
							<Icon type='upload'/>上传
						</Button>
					</Upload>
				</div>
				<Divider dashed/>
				<div>
					<Upload 
					action="//jsonplaceholder.typicode.com/posts/"
					listType='picture-card'
					fileList={this.state.fileList}
					onPreview={this.handlePreview.bind(this)}
					onChange={this.handleChange.bind(this)}>
					 {this.state.fileList.length >= 3 ? null : uploadButton}
					 </Upload>
					<Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
						<img src={this.state.previewImage} alt="example" style={{width:'100%'}}/>
					</Modal>
				</div>
				
				<Divider dashed/>
	
				<div>
					<Dragger
					name='file'
					action='//jsonplaceholder.typicode.com/posts/'
					multiple={true}
					onChange={(info)=>{
						let status = info.file.status;
						if (status !== 'uploading') {
						  console.log(info.file, info.fileList);
						}
						if (status === 'done') {
						  message.success(`${info.file.name} file uploaded successfully.`);
						} else if (status === 'error') {
						  message.error(`${info.file.name} file upload failed.`);
						}
					}}>
						<Icon type='inbox' style={{color:'blue',fontSize:'40px'}}></Icon>
						<p>选择图片进行上传</p>
					</Dragger>				
				</div>

			</div>
		)
	}
}

export default Uploads