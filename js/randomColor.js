function randomRGB() {
	return Math.floor(Math.random());
}
function randomColor() {
	var color = 'rgb(';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	color +=randomRGB() + ',';
	return color;
}