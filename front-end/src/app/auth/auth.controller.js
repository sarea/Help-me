export class AuthController {

	constructor($auth, DataModels) {
		'ngInject';

		this.$auth = $auth;
		this.DataModels = DataModels;
	}

	register() {
		this.$auth.signup(this.user);
	}

	getDayNumber(value) {
		if(['January', 'March', 'May', 'July', 'August', 'October', 'December'].includes(value)){
			 return this.DataModels.month31;
		}
		if(['April', 'June', 'September', 'November'].includes(value)){
			return this.DataModels.month30;
		}
		if('February'){
			return this.DataModels.month29;
		}
	}

	getYears(){
		var d = new Date().getFullYear();
		var years = [];
		for(var i = d-100; i < d-13; i++){
			years.push(i);
		}
		return years;
	}

}