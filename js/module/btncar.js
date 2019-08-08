define(function(){
	class Btncar{
		constructor(aaa){
			this.btn=aaa.obox;
			this.init();
		}
		init(){
			var that=this;		
			this.btn.onclick=function(){
				that.load();
			}
		}
		load(){
			this.n=localStorage.getItem("loginUser");
			this.event();
		}
		event(){
			
			if(!this.n){
				location.href="login.html";			
			}else{
				location.href="car.html";
			}
		}
	}
	return Btncar;
})
