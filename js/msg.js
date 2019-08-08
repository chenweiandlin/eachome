////渲染页面
//class Msg{
//  constructor(){
//      this.tbody = document.querySelector(".qwer");
//      this.url = "http://localhost/xiangmu/data/data.json";
//      this.init();
//  }     
//  init(){
//      var that = this;
//      ajaxPost(this.url,function(res){
//          that.res = JSON.parse(res)
//          that.getData();
//      })
//  }
//  getData(){
//      this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
//
//      this.display();    
//  }
//  display(){
//  	let u = location.search;
//  	let s = u.split("?")[1].split("=")[1];
//      var str = "";
//      for(var i=0;i<this.res.length;i++){
//      		//判断数据库的ID与url里传入的ID相同就渲染页面
//              if(this.res[i].goodsId == s){
//                  str += `<div class="message" index="${this.res[i].goodsId}">
//	                    		<div class="s_box">
//									<img src="${this.res[i].src}"/>
//									<span></span>
//									<p></p>
//								</div>
//								<div class="msg">
//									<h3>${this.res[i].name}</h3>
//									<p>${this.res[i].main}</p>
//									<span>${this.res[i].price}</span>
//									<em class="addCar">加入购物车</em>
//								</div>
//								<div class="b_box">
//									<img src="${this.res[i].src}"/>
//								</div>
//							</div>`
//              }
//      }
//      this.tbody.innerHTML = str;
//      new Magnifier();
//  }
//}
//new Msg;


//放大镜效果
function Magnifier(){
	this.sBox = document.querySelector(".s_box");
	this.span = document.querySelector(".s_box span");
	this.bBox = document.querySelector(".b_box");
	this.bImg = document.querySelector(".b_box img");
	
	this.sImg = document.querySelector(".s_box img")
	
	this.addEvent();
};

Magnifier.prototype.init = function(){
	var w = this.bImg.offsetWidth / this.bBox.offsetWidth;
	var h = this.bBox.offsetHeight / this.bImg.offsetHeight;
	
	this.span.style.width = this.sBox.offsetWidth / w + "px";
	this.span.style.height = this.sBox.offsetHeight*h + "px";
	
};

Magnifier.prototype.addEvent = function(){
	var that = this;
	this.sBox.addEventListener("mouseover",function(){
		that.over();
		that.init();
	});
	
	this.sBox.addEventListener("mouseout",function(){
		that.out();
	});
	
	this.sBox.addEventListener("mousemove",function(eve){
		var e = eve || window.event;
		that.move(e);
	});
};

Magnifier.prototype.over = function(){
	this.span.style.display = "block";
	this.bBox.style.display = "block";
	this.sImg.style.opacity = "0.6";
};

Magnifier.prototype.out = function(){
	this.span.style.display = "none";
	this.bBox.style.display = "none";
	this.sImg.style.opacity = "1";
};

Magnifier.prototype.move = function(e){
	var l = e.offsetX - this.span.offsetWidth/2;
	var t = e.offsetY - this.span.offsetHeight/2;
	
	if(l<0){l=0};
	if(t<0){t=0};
	if(l>this.sBox.offsetWidth - this.span.offsetWidth){l = this.sBox.offsetWidth - this.span.offsetWidth};
	if(t>this.sBox.offsetHeight - this.span.offsetHeight){t = this.sBox.offsetHeight - this.span.offsetHeight};
	
	this.span.style.left = l + "px";
	this.span.style.top = t +40 + "px";
				
	var x = l / this.sBox.offsetWidth;
	var y = t / this.sBox.offsetHeight;
	
	this.bImg.style.left = -this.bImg.offsetWidth * x + "px";
	this.bImg.style.top = -this.bImg.offsetHeight * y + "px";
	
	this.span.style.backgroundPosition = -l + "px " + -t + "px"; 
	
};



//储存数据，加入购物车
//class GoodsList{
//  constructor(){
//      this.cont = document.querySelector(".qwer");
//      this.url = "http://localhost/xiangmu/data/data.json";
//      this.addEvent();
//  }
//  addEvent(){
//      var that = this;
//      let u = location.search;
//  	let s = u.split("?")[1].split("=")[1];
//      this.cont.onclick = function(eve){
//          var e = eve || window.event;
//          var t = e.target || e.srcElement;
//          if(t.className == "addCar"){
//              that.id = s;
//              that.setData();
//          }
//      }
//  }
//  setData(){
//      this.goods = localStorage.getItem("goods");
//      if(this.goods){
//          this.goods = JSON.parse(this.goods)
//          var onoff = true;
//          for(var i=0;i<this.goods.length;i++){
//              if(this.goods[i].id == this.id){
//                  this.goods[i].num++;
//                  onoff = false;
//              }
//          }
//          if(onoff){
//              this.goods.push({
//                  id:this.id,
//                  num:1
//              })
//          }
//      }else{
//          this.goods = [{
//              id:this.id,
//              num:1
//          }];
//      }
//      localStorage.setItem("goods",JSON.stringify(this.goods))
//  }
//}
//new GoodsList;


//退出登录清除数据
$("#noshop").click(function(){
    localStorage.removeItem("loginUser");
});


////	判断是否登录
//class Btncar{
//	constructor(){
//		this.btn=document.querySelector(".shop");
//		this.init();
//	}
//	init(){
//		var that=this;		
//		this.btn.onclick=function(){
//			that.load();
//		}
//	}
//	load(){
//		this.n=localStorage.getItem("loginUser");
//		this.event();
//	}
//	event(){
//		
//		if(!this.n){
//			location.href="login.html";			
//		}else{
//			location.href="car.html";
//		}
//	}
//}
//new Btncar();
