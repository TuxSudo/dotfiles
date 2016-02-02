function nextScreen() {
	var current = slate.screen(),
		found = false,
		first;
}



var fullscreen = slate.operation("move", {
    "x": "screenOriginX",
    "y": "screenOriginY",
    "width": "screenSizeX",
    "height": "screenSizeY"
});

var pushRight = slate.operation("push", {
    "direction": "right",
    "style": "bar-resize:screenSizeX/2",
});

var pushLeft = slate.operation("push", {
    "direction": "left",
    "style": "bar-resize:screenSizeX/2"
});

var pushTop = slate.operation("push", {
    "direction": "top",
    "style": "bar-resize:screenSizeY/2"
});

var pushBottom = slate.operation("push", {
    "direction": "bottom",
    "style": "bar-resize:screenSizeY/2"
});


var doThrow = slate.operation("throw", {
	"screen" : "next",
	"width" : "screenSizeX",
	"height" : "screenSizeY"
});


slate.bnda({

	"f:cmd,shift,space": fullscreen,
	"up:cmd,shift,space": pushTop,
	"left:cmd,shift,space": pushLeft,
	"right:cmd,shift,space": pushRight,
	"down:cmd,shift,space": pushBottom,
	"t:cmd,shift,space": doThrow


});
