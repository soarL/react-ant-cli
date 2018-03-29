import React,{ Component } from 'react'
import { Menu ,Icon} from 'antd'

import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

const Item = Menu.Item

class LeftMenu extends Component{

	handleClick = (e) => {
    	console.log('click ', e);
  	}

	render(){
		return(
			<Menu
			       onClick={this.handleClick}
			       style={{ width: "95%" }}
			       // defaultSelectedKeys={['1']}
			       // defaultOpenKeys={['sub1']}
			       mode="inline"
			       inlineCollapsed={false}
			     >
	       <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Ant design</span></span>}>
	           <Item key="1">
	          		<Link to="/antd/base">基础应用</Link>
	           </Item>
	           <Item key="2">
	           		<Link to="/antd/from">表单</Link>
	           </Item>
	           <Item key="3">
					<Link to="/antd/alert">信息提示</Link>
	           </Item>
	           <Item key="4">
	           		<Link to='/antd/steps'>步骤条</Link>
	           </Item>
	           <Item key="5">
	           		<Link to='/antd/upload'>文件上传</Link>
	           </Item>
				<Item key='6'>
					<Link to='/antd/tabs'>标签页</Link>
				</Item>
				<Item key='7'>
					<Link to='/antd/carousel'>轮播图</Link>
				</Item>

	       </SubMenu>

	       <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
	         <Item key="5">Option 5</Item>
	         <Item key="6">Option 6</Item>
	         <SubMenu key="sub3" title="Submenu">
	           <Item key="7">Option 7</Item>
	           <Item key="8">Option 8</Item>
	         </SubMenu>
	       </SubMenu>
	     </Menu>
		)
	}
}

export default LeftMenu