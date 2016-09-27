window.onload=function(){
    var lis=document.getElementsByTagName('li');
	for(var i=0; i< lis.length; i++){
		 lis[i].onmouseover=function(event){
            //鼠标经过一级菜单，二级菜单动画下拉显示出来
	     event.style.overflow = 'visible';
	     
		}
        //鼠标离开菜单，二级菜单动画收缩起来。		
		 lis.onmouseout=function(lis){
		event.style.overflow='hidden';
		}
		
		
	}
}