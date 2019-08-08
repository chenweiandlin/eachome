define(function(){
	class GoodsList{
	    constructor(ccc){
	        this.cont = ccc.n;
	        this.url = ccc.m;
	        this.addEvent();
	    }
	    addEvent(){
	        var that = this;
	        let u = location.search;
	    	let s = u.split("?")[1].split("=")[1];
	        this.cont.onclick = function(eve){
	            var e = eve || window.event;
	            var t = e.target || e.srcElement;
	            if(t.className == "addCar"){
	                that.id = s;
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
	return GoodsList;
})
