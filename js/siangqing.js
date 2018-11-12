window.onload=function(){
	var oMen=document.querySelector(".men");
	var oBigbox=document.querySelector(".bigbox");
	var oGraw=document.querySelector(".graw");
	var oBig=document.querySelector(".big");
	oMen.onmouseleave=function(){
		oGraw.style.display="none";
		oBigbox.style.display="none";
	}
	oMen.onmouseenter=function(){
		oGraw.style.display="block";
		oBigbox.style.display="block";
	}
	oMen.onmousemove=function(evt){
		var e= evt || window.event;
		var x=e.offsetX-(oGraw.offsetWidth)/2;
		var y=e.offsetY-(oGraw.offsetHeight)/2;
		if(x<0){
			x=0;
		}
		else if(x>oMen.offsetWidth-oGraw.offsetWidth){
			x=oMen.offsetWidth-oGraw.offsetWidth;
		}
		if(y<0){
			y=0;
		}else if(y>oMen.offsetHeight-oGraw.offsetHeight){
			y=oMen.offsetHeight-oGraw.offsetHeight;
		}
		oGraw.style.left=x+"px";
		oGraw.style.top=y+"px";	

		var ngX=-x/(oMen.offsetHeight-oGraw.offsetWidth);
		var ngY=-y/(oMen.offsetHeight-oGraw.offsetHeight);
		var bigX=ngX*(oBig.offsetWidth-oGraw.offsetWidth);
		var bigY=ngY*(oBig.offsetHeight-oBigbox.offsetHeight);
		oBig.style.left=bigX+"px";
		oBig.style.top=bigY+"px";
	}

	$(function(){
		$.ajax({
			url:"../json/date.json",
			type:"get",
			success:function(res){
				var val=res.frame[0].decs;
				console.log(val)
				var html="";
				for(var i=0;i<val.length;i++){
					html+=`<div class="ITEM"><a href="" class="imghover"><div class="img"><img src="${val[i].img}" alt=""></div></a><div class="info_box"><div><p class="info"></p><h4>${val[i].name}</h4>&nbsp;${val[i].year}<br>${val[i].typesize}<p class="price">${val[i].price}</p></div></div></div>`;
				}
				$(".ITEMBOX").append(html);
			}
		})
	})
}