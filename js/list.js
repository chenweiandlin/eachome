// 数据渲染页面
class Car{
		constructor(){
			this.oul=document.querySelector(".cont");
			this.url="http://localhost/xiangmu/data/data.json";
			this.init();
			
		}
		init(){
			var that=this;
			ajaxPost(this.url,function(res){
				//console.log(res);
				that.res=JSON.parse(res);
				
				that.display();
			})
			
		}
		display(){
			var str="";
				for(var i=0;i<this.res.length;i++){
					str+=`<li index="${this.res[i].goodsId}">
								<a href="msg.html?id=${this.res[i].goodsId}">
								<img src="${this.res[i].src}">
								<p class="new-c">${this.res[i].name}</p>
								<span class="new-p">${this.res[i].price}</span>
								</a>
								<h3 class="addCar">加入购物车</h3>
							</li>`
				}
				this.oul.innerHTML=str;
		}
		
				
	}
new Car();	

//分页
class Page{
	constructor(options){
		this.url = options.url;
		this.list = options.list;
		this.pageList = options.pageList;
		this.num = options.num || 4;
		this.index = options.index || 0;			
		this.load();
	}
	load(){
		var that = this;
		$.ajax({
			url:this.url,
			success:function(res){
				that.res = res;
				that.createPage()
			}
		})
	}
	createPage(){
		var that = this;
		this.pageList.pagination(this.res.length,{
			items_per_page:this.num,
			current_page:this.index,
			callback:function(index){
				that.index = index;
				that.display();
			}
		})
	}
	display(){
		var str = "";
		for(var i=this.index*this.num; i<(this.index+1)*this.num;i++){	
			if(i<this.res.length){
				str+=`<li index="${this.res[i].goodsId}">
						<a href="msg.html?id=${this.res[i].goodsId}">
						<img src="${this.res[i].src}">
						<p class="new-c">${this.res[i].name}</p>
						<span class="new-p">${this.res[i].price}</span>
						</a>
						<h3 class="addCar">加入购物车</h3>
					</li>`
			}
		}
		this.list.html(str);
	}
}
	
new Page({
	list:$("#list").children("ul"),
	pageList:$(".pagination"),
	url:"http://localhost/xiangmu/data/data.json",
	num:20,
	index:0
});

// 点击储存数据
class GoodsList{
    constructor(){
        this.cont = document.querySelector(".cont");
        this.url = "http://localhost/xiangmu/data/data.json";
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.cont.onclick = function(eve){
            var e = eve || window.event;
            var t = e.target || e.srcElement;
            if(t.className == "addCar"){
                that.id = t.parentNode.getAttribute("index");
                that.setData();
            }
        }
    }
    setData(){
        this.goods = localStorage.getItem("goods");
        if(this.goods){
            this.goods = JSON.parse(this.goods)
            var onoff = true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id == this.id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }else{
            this.goods = [{
                id:this.id,
                num:1
            }];
        }
        localStorage.setItem("goods",JSON.stringify(this.goods))
    }
}
new GoodsList;


//三级菜单
var tit = document.querySelector(".mytit")
var ber = document.querySelector("#banner")
var ali = document.querySelectorAll(".ban-l ul li");
var obox = document.querySelector(".linlin");

tit.onmouseover = function(){
	ber.style.display = "block";
};
ber.onmouseleave = function(){
	ber.style.display = "none";
};
for(var i=0;i<ali.length;i++){
	ali[i].onmouseover = function(){
		$(this).children(".linlin").css("display","block");
		this.style.background = "#fff";
		$(this).find("a").css("color","#333")
	};
	ali[i].onmouseout = function(){
		$(this).children(".linlin").css("display","none");
		this.style.background = "";
		$(this).find("a").css("color","#fff")
	}
};