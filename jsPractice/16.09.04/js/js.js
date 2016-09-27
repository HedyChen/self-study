window.onload=function(){
	var box=document.getElementById('divselect'),
	    title=box.getElementsByTagName('cite')[0],
	    menu=box.getElementsByTagName('ul')[0],
	    as=box.getElementsByTagName('a'),
        index=-1;
   
    // 点击三角时
    title.onclick=function(event){
      event=event||window.event;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else{
        event.canceBubble==true;
      };
       menu.style.display='block';
    } 
     //鼠标事件
     document.onkeyup=function(event){
      event=event||window.event;
      for(i=0,l=as.length;i<l;i++){
        as[i].style.background='none';
      }
     //如果按下了下键
      if(event.keyCode==40){
        index++;
        if(index>=as.length){
          index=0;
        }
        as[index].style.background='#ccc';
      }
      //当按下上键
     if(event.keyCode==38){
      
       if(index<=0){
          index=as.length;
        }
        index--;
        as[index].style.background='#ccc';
     }
     //当按下enter键
      if (event.keyCode==13&&index!=-1) {
        title.innerHTML=as[index].innerHTML;
         menu.style.display='none';
      } 
     }
     // 滑过滑过、离开、点击每个选项时
    for(i=0,l=as.length;i<l;i++){
       as[i].onmouseover=function(){
        this.style.background='#ccc';
       }
       as[i].onmouseleave=function(){
        this.style.background='none';
       }
       as[i].onclick=function(){
        title.innerHTML=this.innerHTML;
        menu.style.display='none';
       }
    }   
   // 点击页面空白处时
   document.onclick=function(){
     menu.style.display='none';
   }
       
 }