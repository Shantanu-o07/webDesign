var email=document.forms['form']['email'];
var pass=document.forms['form']['pass'];

var Eerror=document.getElementById("Eerror");
var Perror=document.getElementById("Perror");

email=addEventListener('textInnput','Everify')
pass=addEventListener('textInnput','Pverify')

function verify(){
	if (email.value.length <9){
		email.style.border="1px solid red";
		Eerror.style.display="block";
		email.focus();
		return false;
	}
	if (pass.value.length <6){
		pass.style.border="1px solid red";
		Perror.style.display="block";
		pass.focus();
		return false;
	}
}

function Everify(){
	if (email.value.length >=4){
		email.style.border="1px solid green";
		Eerror.style.display="none";
		return true;
	}
}
function Pverify(){
	if (pass.value.length >=5){
		pass.style.display="1px solid green";
		Perror.style.display="none";
		return true;
	}
}


 
 
