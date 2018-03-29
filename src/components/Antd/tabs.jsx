import React , { Component } from 'react'
import {
	message,
	Tabs,
	Icon,
	Divider
} from 'antd'

const TabPane = Tabs.TabPane


class Tabsex extends Component{
	constructor(props){
		super(props)
		message.info('标签页')

		this.newTabIndex = 0;
	    const panes = [
	      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
	      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
	      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
	    ]
		this.state = {
		    activeKey: panes[0].key,
		    panes,
		}
	}
	callback(e){
	}

	onChange = (activeKey) => {
	   this.setState({ activeKey });
	}

	onEdit = (targetKey, action) => {
	   	this[action](targetKey);
	}

	add = () => {
	   const panes = this.state.panes;
	   const activeKey = `newTab${this.newTabIndex++}`;
	   panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
	   this.setState({ panes, activeKey });
	}

	remove = (targetKey) => {
	   let activeKey = this.state.activeKey;
	   let lastIndex;
	   this.state.panes.forEach((pane, i) => {
	     if (pane.key === targetKey) {
	       lastIndex = i - 1;
	     }
	   });
	   const panes = this.state.panes.filter(pane => pane.key !== targetKey);
	   if (lastIndex >= 0 && activeKey === targetKey) {
	     activeKey = panes[lastIndex].key;
	   }
	   this.setState({ panes, activeKey });
	}

	render(){
		return(
			<div>
				<Tabs defaultActivekey='1' onChange={this.callback}>
					<TabPane tab='第一个' key='1'>这是第一个坑</TabPane>
					<TabPane tab='第二个' key='2' disabled>这是第二个坑</TabPane>
					<TabPane tab='第三个' key='3'>这是第三个坑</TabPane>
					<TabPane tab={<span><Icon type='apple'/>第四个</span>} key='4'>这是第四个坑</TabPane>
				</Tabs>
				<Divider dashed/>

			    <Tabs
			        onChange={this.onChange}
			        activeKey={this.state.activeKey}
			        type="editable-card"
			        onEdit={this.onEdit}>

			        {
			        	this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)
			        }
		      	</Tabs>	

			</div>
		)
	}
}

export default Tabsex