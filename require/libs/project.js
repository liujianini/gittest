define(["module/tablechoice","module/toast"],function(table,toast){

	    var aBtn = document.getElementById("btn").children;
		var aShow = document.getElementById("show").children;
		table.init({
			btn:aBtn,
			show:aShow
		});

		toast.init(aShow);

})