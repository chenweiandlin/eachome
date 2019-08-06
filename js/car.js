class Car{
    constructor(){
        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/xiangmu/data/data.json";

        this.init();
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.tbody.onclick = function(){
            if(event.target.className == "del"){
                that.id = event.target.parentNode.getAttribute("index");
                event.target.parentNode.remove();
                that.setData(function(i){
                    that.goods.splice(i,1);
                });
            }
        }
        this.tbody.oninput = function(){
            if(event.target.className == "changeNum"){
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                that.setData(function(i){
                    that.goods[i].num = event.target.value;
                });
            }
        }
    }
    setData(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                callback(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
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
        var str = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId == this.goods[j].id){
                    str += `<tr index="${this.res[i].goodsId}">
                                <td><img src="${this.res[i].src}" alt=""></td>
                                <td>${this.res[i].name}</td>
                                <td>${this.res[i].price}</td>
                                <td><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
                                <td class="del">删除</td>
                            </tr>`
                }
            }
        }
        this.tbody.innerHTML = str;
    }
}
new Car;