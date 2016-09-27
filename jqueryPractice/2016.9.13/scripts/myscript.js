$(function(){
	var $imgrool=$('#jnImageroll div a');
	var len=$imgrool.length;
	//搜索框
		$("#inputSerch").focus(function() {
		if($(this).val()==this.defaultValue){
			$(this).val("");
		}	
	}).blur(function() {
		if($(this).val()==""){
			$(this).val(this.defaultValue);
		}
	})
    //点击搜索
	    $("#inputSerch").keyup(function(event){
	    	if (event.which==13) {
	    		alert("网站建设中，敬请期待！");
	    	}
	    });
	    $("img:eq(1)").click(function() {
	    	alert("网站建设中，敬请期待！");
	    });
	//网页换肤
	$(function(){
		var $li=$("#skin li");
		$li.click(function() {
			switchSkin(this.id);
		});
		function switchSkin(skinName){
			$("#"+skinName).addClass('selected').siblings().removeClass('selected');
			$("#cssfile").attr("href","styles/"+skinName+".css");
		}
	})
	//导航效果
	$(function(){
		$("#nav li").hover(function() {
			$(this).find('.jnNav').show();
		}, function() {
			$(this).find('.jnNav').hide();
		});
	})
	//广告滚动
	$(function(){
		var index=0;
		$imgrool.mouseover(function(){
			index=$imgrool.index(this);
			showImg(index);
		})
	}).eq(0).mouseover();
	function showImg(index){
		var newHref=$imgrool.eq(index).attr('href');
		$('#JS_imgWrap').attr('href', newHref)
		               .find('img').eq(index).stop(true, true).fadeIn()
		               .siblings().fadeOut();
	}
	$(function(){
		var addTimer=null;
		var index=0;
		$('#jnImageroll').hover(function(){
			if(addTimer){
				clearInterval(addTimer);
			}
		},function(){
			addTimer=setInterval(function(){
				showImg(index);
				index++;
				if(index==len){
					index=0;
				}

			},2500)
		}).trigger("mouseleave");
	})
})




