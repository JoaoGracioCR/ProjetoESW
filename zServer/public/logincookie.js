if(getCookie("userName")==""){
	document.getElementById("logoutButton").style.display="none";
	document.getElementById("login").style.display="inline-block";
	}else{
	document.getElementById("logoutButton").style.display="inline-block";
	document.getElementById("login").style.display="none";
	} 