export default (state={ value:'我是初始化的内容' },action)=>{
	switch(action.type){
		case "CHANGE":
			return {value:action.payload.data}
		case "BACK":
			return {value:action.payload.data}
		default:
			return state
	}
}
