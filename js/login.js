// 登录 
 window.onload=function(){
 	var oIn=document.getElementsByClassName("inputdiv")[0];
 	var oLine=document.getElementsByClassName("line")[0];
 	var oLine1=document.getElementsByClassName("line1")[0];
 	var op=document.querySelector(".inputdiv p");
 	var oPa=document.querySelector(".passworddiv p");
 	var oIn1=document.querySelector(".passworddiv");
 	oIn.onclick=function(){
 			oLine.style.transform="rotateY(0deg)";
 			op.style.transform="translateY(-20px)";
 			op.style.color="#CF680A";
 			op.style.fontSize="12px";
 	}
 	oIn1.onclick=function(){
 			oLine1.style.transform="rotateY(0deg)";
 			oPa.style.transform="translateY(-20px)";
 			oPa.style.color="#CF680A";
 			oPa.style.fontSize="12px";
 	}
 
 	var oEa=document.getElementsByClassName("email")[0];
	var oHidden=document.querySelector(".hidden");
	var oVisible=document.querySelector(".visible");
	var oVisible1=document.querySelector(".visible1");
	var oPawd=document.querySelector(".password");
	var oZuce=document.querySelector(".login-input");

	oZuce.onclick=function(){
		var reg=/(^1[3-9]\d{9}$)|(^[a-z0-9_]+@[a-z]+\.[a-z])/g;
 		var val=oEa.value;
 		var reg1=/^[A-Za-z0-9@#$%^!*()_\+\?]+$/g;
 		var val1=oPawd.value;
 		$.ajax({
 			url:`https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=${val}&passwd=${val1}`,
 			type:"get",
 			success:function(res){
 				var ren=res.code;
 				switch(ren){
 					case 200:
 					window.location.href="../index.html";
 					break;
 					case 202:
 					$(".show").html(res.msg);
 					break;
 				}
 			},
 			error:function(){

 			}
 		})
 		if(reg.test(val)){
 			oVisible.style.display="none";
 			oHidden.style.display="none";
 			if(reg1.test(val1)){
 				oVisible1.style.display="none";
 				oHidden.style.display="none";
 			}else{
 				oVisible1.style.display="block";
 			}
 		}else if(oEa.value==""){
 				oHidden.style.display="block";
 				oVisible.style.display="block";	
 		}else{
 			oVisible.style.display="block";
 		}
		}
		oPawd.onfocus=function(){
			var reg=/(^1[3-9]\d{9}$)|(^[a-z0-9_]+@[a-z]+\.[a-z])/g;
 			var val=oEa.value;
			if(reg.test(val)){
			oHidden.style.display="none";
			oVisible.style.display="none";	
			}
			else if(oEa.value==""){
				oHidden.style.display="block";
				oVisible.style.display="block";
			}
		}
	}




 