
	var osp = document.querySelectorAll(".price .bgblack");
	var oSzie=document.querySelectorAll(".size .bgblack");
	var oColor=document.querySelectorAll(".color .bgblack");
	for(let i=0;i<osp.length;i++){
		osp[i].onclick=function(){
			var ns=osp[i].parentNode.children;
			 for(var j=0;j<ns.length;j++){
			 	ns[j].style.background="";
			 }
			osp[i].style.background="#000";
		}
	}
	for(let i=0;i<oSzie.length;i++){
		oSzie[i].onclick=function(){
			var ns=oSzie[i].parentNode.children;
			 for(var j=0;j<ns.length;j++){
			 	ns[j].style.background="";
			 }
			oSzie[i].style.background="#000";
		}
	}
	for(let i=0;i<oColor.length;i++){
		oColor[i].onclick=function(){
			var ns=oColor[i].parentNode.children;
			 for(var j=0;j<ns.length;j++){
			 	ns[j].style.border="";
			 }
			oColor[i].style.border="2px solid #000";
		}
	}



		var index=0;
		var leth=$(".show-wall").length;
	$(".one").mouseenter(function(){
		index=$(this).index();
		changeImg();
	})
	$(".one").mouseleave(function(){
		$(".show-wall").eq(0).css({
				"display":"block",
				"transition":"0.7s"
			}).siblings().css({
				"display":"none",
				"transition":"0.7s"
			})
	})
	// $(".one").click(function(){
	// 	$(".show-wall").eq(index).css({
	// 			"display":"block",
	// 			"transition":"0.7s"
	// 		}).siblings().css({
	// 			"display":"none",
	// 			"transition":"0.7s"
	// 		})
	// 		index=0;
	// })
	function changeImg(){
			$(".show-wall").eq(index).css({
				"display":"block",
				"transition":"0.7s"
			}).siblings().css({
				"display":"none",
				"transition":"0.7s"
			})
		}
