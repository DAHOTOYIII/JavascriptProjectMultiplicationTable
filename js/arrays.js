document.getElementById('btn-displayarray').onclick = function (){
	alert('working');
	var documentHTML= "";
	var myarray = ["Array 1", "Array 2", "Array 3"];
	for( i=0; i < myarray.length; i++){
		documentHTML = documentHTML + myarray[i]+ "<br>";
	}
	document.getElementById('array-container').innerHTML = documentHTML;
}