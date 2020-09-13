/* Copyright 2013 Eric Dudiak */

var neededCSSAttributes=["position", "textShadow"];

function verifyResumeBrowserSupport()
{
	var supported = true;
	
	for (index in neededCSSAttributes) {
		supported = supported && isPropertySupported(neededCSSAttributes[index]);
	}
	if(supported) {
		
	} else {
		window.location = "EricDudiak_Resume.pdf";
	}
}

function verifyBrowserSupport()
{
	var supported = true;
	
	for (index in neededCSSAttributes) {
		supported = supported && isPropertySupported(neededCSSAttributes[index]);
	}
/* 	if(supported) { */
		$fx('#main_sidebar').style.visibility = 'visible';
		
		var bounceBack = function(){
			$fx('#main_sidebar').fxAdd({type: 'marginTop', from: 90, to: 128, step: 1, delay: -1}).fxRun(null,1,null);
		}
		
		$fx('#main_sidebar').fxAdd({type: 'marginTop', from: window.innerHeight, to: 90, step: -8, delay: -1}).fxRun(bounceBack,1);
/*
	} else {
		window.location = "unsupported.php";
	}
*/
}

function isPropertySupported(property)
{
	return property in document.body.style;
}
