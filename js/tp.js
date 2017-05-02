

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
  	
		//如果之前没有加载过，就加进来
    window.onload = func;
  } else {
  	//如果之前onload里面已经有了，就添加在后面
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
