window.onload=function(){
	var container=document.getElementById('container');
	var pre=document.getElementById('pre');
	var next=document.getElementById('next');
	var list=document.getElementById('list');
	var buttons=document.getElementById('buttons').getElementsByTagName('span');
	var isclick=false;
	var index=1;

	function yuandian(){//下面的小圆点样式的改变
		for (var i =0;i<buttons.length; i++) {
			if (buttons[i].className=='on') {
				buttons[i].className='';
			}
		}
		buttons[index-1].className='on';
	}

	function qiehuan(offset){//进行切换
		isclick=true;
		var newset=parseInt(list.style.left)+offset+'px';
		if (parseInt(newset)<-3000) {
			list.style.left=-600+'px';
			index=-parseInt(list.style.left)/600;
			yuandian();
			return;
		}
		else if(parseInt(newset)>-600){
			list.style.left=-3000+'px';
			index=-parseInt(list.style.left)/600;
			yuandian();
			return;
		}
		list.style.left=newset;
		index=-parseInt(list.style.left)/600;
		yuandian();
		isclick=false;
	}

	pre.onclick=function(){//上一个图
		if (!isclick) {
			qiehuan(600);
		}
	}
	next.onclick=function(){//下一个图
		if (!isclick) {
			qiehuan(-600);
		}
	}

	for (var i = 0; i < buttons.length; i++) {
		!function(i){
			buttons[i].onclick=function(){
				if(this.className=='on'){
					return;
				}
				// debugger;
				var kuadu=-600*(i+1-index);
				// console.log(i);
				// console.log(kuadu);
				qiehuan(kuadu);
		};
		}(i);
		
		
	};



}