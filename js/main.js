require(["js/module/btncar","js/module/msg","js/module/goodslist-msg"],function(t,q,w){	
	new t({
        obox:document.querySelector(".shop")
   });
   
   new q({
   		x:document.querySelector(".qwer"),
   		y:"http://localhost/xiangmu/data/data.json"
   });
   
   new w({
   		n:document.querySelector(".qwer"),
   		m:"http://localhost/xiangmu/data/data.json"
   });
});

