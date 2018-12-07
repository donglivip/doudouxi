$(function() {
	var scroll = document.querySelector('.scrolmain');
	var outerScroller = document.querySelector('.main-inner');
	var touchstart = 0
	//	触摸开始
	outerScroller.addEventListener('touchstart', function(event) {
		var touch = event.targetTouches[0];
		touchstart = touch.pageY
	}, false);
	//	手指移动中记录移动位置
	outerScroller.addEventListener('touchmove', function(event) {
		var touch = event.targetTouches[0];
		if((touch.pageY - touchstart)<=100){
			outerScroller.style.top = touch.pageY - touchstart + 'px';
		}
	}, false);
	//	手指松开回弹
	outerScroller.addEventListener('touchend', function(event) {
		var top = outerScroller.offsetTop;
		if(top > 70) {
			myvue.mydata = [];
			myvue.pageNum = 0;
			myvue.myajax()
		};
		if(top > 0) {
			var time = setInterval(function() {
				outerScroller.style.top = (outerScroller.offsetTop - 4 >= 0 ? outerScroller.offsetTop - 4 : 0) + 'px';
				if(outerScroller.offsetTop <= 0) clearInterval(time);
			}, 1)
		}
	}, false);
})