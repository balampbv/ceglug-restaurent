

function answers() {
//Getting Value of ITem 1
var select1 = document.getElementById("mySelect1");
var val1 = select1.options[select1.selectedIndex].value;
//Getting NAme of ITem 1
var selectitem1 = document.getElementById("mySelectItem1");
var item1 = selectitem1.options[selectitem1.selectedIndex].value;


//Getting Value of ITem 2
var select2 = document.getElementById("mySelect2");
var val2 = select2.options[select2.selectedIndex].value;
//Getting NAme of ITem 2
var selectitem2 = document.getElementById("mySelectItem2");
var item2 = selectitem2.options[selectitem2.selectedIndex].value;


var total = parseInt(val1)+parseInt(val2);

if(parseInt(val1)==150)
{
	var q1="HALF";
}else if(parseInt(val1)==""){
var q1="NONE";
}
else{
	var q1="FULL";
}

if(parseInt(val2)==150)
{
	var q2="HALF";
}else if(parseInt(val2)==""){
var q2="NONE";
}else{
	var q2="FULL";
}
document.getElementById("it1").innerHTML  = item1;
document.getElementById("it2").innerHTML  = item2;
document.getElementById("check1").innerHTML  = val1;
document.getElementById("check2").innerHTML  = val2;//Now you get the js variable inside your form element
document.getElementById("check3").innerHTML  = total;
document.getElementById("q1").innerHTML  = q1;
document.getElementById("q2").innerHTML  = q2;

    
}
 $(document).ready(function(){
     $("#sub").click(function(){
    	 	//var check = total;
    	 	$('.ui.modal')
   			.modal('show');

            });
 });
