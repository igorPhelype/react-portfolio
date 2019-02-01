export const FormToObject = (e) => {
	e.preventDefault();
	e.stopPropagation();
	return Object.values(e.target).reduce((all, current) => {
		if(current.name){
			return {...all, [current.name]: current.value};
		}else{
			return all;
		}
	}, {});
};