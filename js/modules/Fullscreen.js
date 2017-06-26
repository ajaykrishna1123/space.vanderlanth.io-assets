//==============================================================================
//==============================================================================
//==============================================================================
//FULLSCREEN MODE ==============================================================
//==============================================================================
//==============================================================================
//==============================================================================

var Fullscreen = (function(){

	var Fullscreen = function(){

	}

	Fullscreen.prototype = {

		init: function(){
		},

		toggleScreen: function(){
			if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
			}
			else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}

			// if(document.querySelector('.intro--canvas')){
			// 	introCanvas.onWindowResize();
			// }
		}

	}

	return Fullscreen;
})();
