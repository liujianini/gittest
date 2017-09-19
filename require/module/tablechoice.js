define(function(){
	class TableChoice{
		constructor(){
		}
		init(ele){
			this.btn = $(ele.btn);
			this.show = ele.show;	
			var that = this;
			this.btn.on("click",function(){
				that.change(this,$(this).index());
				console.log(this);
				console.log($(this).index())
			})
		}
		change(ele,index){
			for(var i = 0 ; i < this.btn.length ; i++){
				this.btn[i].className = "";
				this.show[i].style.display = "none";
			}
			ele.className = "active";
			this.show[index].style.display = "block";
		}
	}
	return new TableChoice();
})