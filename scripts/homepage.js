/* Copyright 2013 Eric Dudiak */

var neededCSSAttributes=["position", "textShadow", "background-size"];

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

function isPropertySupported(property)
{
	return property in document.body.style;
}
