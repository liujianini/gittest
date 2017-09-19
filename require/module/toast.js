define(function(){
	class Toast{
		constructor(){
		}
		init(ele){
			//判定一件事; 还是单个对象;
			if(ele.length == undefined){
				//对象;
				console.log("对象");
				var that = this;
				ele.onclick = function(){
					that.pop(this);
				}
			}else{
				var that = this;
				for(var i = 0 ; i < ele.length ; i++){
					ele[i].onclick = function(){
						that.pop(this);
					}
				}
			}
		}
		pop(ele){
			//console.log(ele.innerHTML);
			var div = document.createElement("div");
			div.className = "pop";
			div.innerHTML = ele.innerHTML;
			document.body.appendChild(div);
			this.hide(div)
		}
		hide(ele){
			setTimeout(function(){
				ele.remove();
			}, 1000);
		}
	}

	return new Toast();
	
})