/*Multiplication Table using recursive algorithm*/	
document.getElementById('displaynumbers').onclick = function (){
	var tableheader = "";
	var tablerow = "";
	var tabledata="";
	var total = 0;
	var maxnum = document.getElementById('maxnum').value;
	for (var i = 1; i <= maxnum; i++){
		tableheader = tableheader +"<th  scope="+'row'+" id="+'header'+i+">"+i+"</th>" 
		document.getElementById('tableheader').innerHTML = tableheader;
		if(i>0){
			tablerow = tablerow + "<tr id="+'tblerow'+i+"></tr>";
			document.getElementById('multiplication-table').innerHTML= tablerow;	
		}		
	}
	for (var c=1; c<=maxnum; c++){
		for(var b=1; b<=maxnum; b++){		
			total = c * b;
			tabledata = tabledata + "<td id="+'tdata'+b+">"+total+"</td>";				
		}
		document.getElementById('tblerow'+c).innerHTML = tabledata;
		tabledata = "";
		total = 0;
	}	
}
