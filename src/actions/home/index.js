// action
const onchange = (x='xxxx') =>{
	return {
		type:"CHANGE",
		payload:{
			data:x,
		}
	}
}

const back = (x='事实上')=>{
	return {
		type:"BACK",
		payload:{
			data:x,
		}
	}
}

export {
	onchange,
	back
}