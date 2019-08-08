define(function(){
	class Msg{
	    constructor(bbb){
	        this.tbody = bbb.x;
	        this.url = bbb.y;
	        this.init();
	    }     
	    init(){
	        var that = this;
	        ajaxPost(this.url,function(res){
	            that.res = JSON.parse(res)
	            that.getData();
	        })
	    }
	    getData(){
	        this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
	
	        this.display();    
	    }
	    display(){
	    	let u = location.search;
	    	let s = u.split("?")[1].split("=")[1];
	        var str = "";
	        for(var i=0;i<this.res.length;i++){
	        		//判断数据库的ID与url里传入的ID相同就渲染页面
	                if(this.res[i].goodsId == s){
	                    str += `<div class="message" index="${this.res[i].goodsId}">
		                    		<div class="s_box">
										<img src="${this.res[i].src}"/>
										<span></span>
										<p></p>
									</div>
									<div class="msg">
										<h3>${this.res[i].name}</h3>
										<p>${this.res[i].main}</p>
										<span>${this.res[i].price}</span>
										<em class="addCar">加入购物车</em>
									</div>
									<div class="b_box">
										<img src="${this.res[i].src}"/>
									</div>
								</div>`
	                }
	        }
	        this.tbody.innerHTML = str;
	        new Magnifier();
	    }
	}
	return Msg;
});