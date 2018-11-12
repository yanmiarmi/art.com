
window.onload=function(){
	var oChoices=document.getElementsByClassName("choices")[0];
	var oChios=document.getElementsByClassName("chios")[0];
	var flag=false;
	oChoices.onclick=function(){
		if(!flag){
			oChios.style.display="block";
		}else{
			oChios.style.display="none";
		}
		flag=!flag;
	}
		var oTop=document.querySelector(".top");
		var oMenu = document.querySelector(".Head");
		var oHeadmain=document.querySelector(".Head-main");
		var oHeader= document.querySelector(".header");
		var oCrea=document.querySelector(".crea");
		var oPgf=document.querySelector(".pgf");
		var oLi=document.querySelectorAll(".header-right li");
		var oBa=document.querySelectorAll(".header-right li a");
		var oSearch=document.querySelector(".search");
		var oNav=document.querySelector(".nav");
		console.log(oSearch);
		var oUl=document.querySelector(".nav .ul");
		var oA=document.querySelectorAll(".nav .ul a");
        var height = 0;
        window.onscroll=function(){
        	// 兼容
            height = document.documentElement.scrollTop || document.bodyscrolltop;
            if (height > 0) {
               oMenu.style.position="fixed";
               oTop.style.height="46px";
               oHeader.style.height="46px";
               oHeadmain.style.background="#fff";
               oHeadmain.style.height="46px";
               oHeadmain.style.borderBottom="1px solid #eee";
               oCrea.style.transform="translateY(-20px)";
               oCrea.style.opacity="0";
               oPgf.style.height="28px";
               oPgf.style.width="80.5px";
               oPgf.style.marginTop="11px";
               oPgf.style.marginRight="22px";
               for( var i=0;i<3;i++){
               	oLi[i].style.marginRight="14px";
               	oLi[i].style.marginTop="11px";
              	oLi[i].style.border="none";
               }
               oSearch.style.opacity="0";
               oNav.style.height="0";
               oUl.style.transform="translateY(-50px)";
               oUl.style.transition="0.5s";
               for(var i=0;i<5;i++){
               	oA[i].style.color="#000";
               oA[i].style.borderColor="#000";
               }
                for( var i=0;i<4;i++){
               	oBa[i].style.width="0px";
                oBa[i].style.transition="0.5s";
               }
               
              }else {
               oTop.style.height="140px";
               oHeader.style.height="80px";
               oHeadmain.style.background="";
               oHeadmain.style.height="";
               oHeadmain.style.borderBottom="";
               oCrea.style.transform="translateY(0)";
               oCrea.style.opacity="1";
               oPgf.style.height="32px";
               oPgf.style.width="92px";
               oPgf.style.marginTop="26px";
               oPgf.style.marginRight="0px";
               for( var i=0;i<3;i++){
               	oLi[i].style.marginRight="";
               	oLi[i].style.marginTop="";
              	oLi[i].style.border="";
               }
               oSearch.style.opacity="1";
               oNav.style.height="60px";
               oUl.style.transform="translateY(0)";
               for(var i=0;i<5;i++){
               	oA[i].style.color="#fff";
               oA[i].style.borderColor="#fff";
               }
                for( var i=0;i<4;i++){
               	oBa[i].style.width="";
               }
            } 
    }
    var index=0;
    var imglength=$(".picimg img").length;
    $(".on").click(function(){
      index=$(this).index();
      changeImg();
    })
    function changeImg(){
      $(".picimg img").eq(index).css({
        "opacity":"1",
        "transition":"0.7s"
      }).siblings().css({
        "opacity":"0",
        "transition":"0.7s"
      })
      $(".on").eq(index).addClass("active").siblings().removeClass("active");
    }
    function fn(){
      var timer=setInterval(function(){
        index++;
        if(index>=imglength){
          index=0;
        }
        changeImg();
      },3000)
    }
    fn()
}