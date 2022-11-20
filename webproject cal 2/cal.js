 function restart()
{
var nondiv=document.getElementById("nondiv");
nondiv.style.display="none";
window.location.reload();
}
function add(){
var num1=Number(document.getElementById("inputvalue1").value);
var num2=Number(document.getElementById("inputvalue2").value);
var res=num1+num2;
console.log(res);
var result=document.getElementById(result);
var result=document.createElement("h3");
var nondiv=document.getElementById("nondiv");
nondiv.append(result);
result.innerText=`this is your addition: ${res}`;
var nondiv=document.getElementById("nondiv");
nondiv.style.display="block";
}
function sub()
{
    var num1=Number(document.getElementById("inputvalue1").value);
var num2=Number(document.getElementById("inputvalue2").value);
var res=num1-num2;
console.log(res);
var result=document.getElementById(result);
var result=document.createElement("h3");
var nondiv=document.getElementById("nondiv");
nondiv.append(result);
result.innerText=`this is your addition: ${res}`;
var nondiv=document.getElementById("nondiv");
nondiv.style.display="block";
}
function div()
{
    var num1=Number(document.getElementById("inputvalue1").value);
var num2=Number(document.getElementById("inputvalue2").value);
var res=num1/num2;
console.log(res);
var result=document.getElementById(result);
var result=document.createElement("h3");
var nondiv=document.getElementById("nondiv");
nondiv.append(result);
result.innerText=`this is your addition: ${res}`;
var nondiv=document.getElementById("nondiv");
nondiv.style.display="block";
}


