
function deleteCookies(){
  setCookie("userName","");
  setCookie("passWord","");
  window.location.replace("index.html");
}



function fazerLogin() {
  var numeroAluno =document.getElementById("numeroAluno").value;
  var password = document.getElementById("password").value; 
  var json = { "userName": numeroAluno, "passWord": password };

  var xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", document.location.origin + "/login", true);
  xhr.onload = function () {
      
      if (xhr.readyState == 4 && xhr.status == "200") {
          if (xhr.response.Message=="WrongCombination"){
              window.locatiologinErrorn.replace("forgotPassword.html");
          }else if (xhr.response.Message=="SystemError"){
          }else if (xhr.response.Message=="Success"){
              document.cookie=
          setCookie("userName",xhr.response.userName,10);
          setCookie("passWord",xhr.response.passWord,10);
          window.location.replace("index.html");
      }
          } else {
          console.error("erro consola");
          }
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(json));

};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
/*
document.addEventListener('DOMContentLoaded',function(){

  if(getCookie("role")==3){

    document.getElementById('registarMenu').style.display = "none";
    document.getElementById('relatorios').style.display = "none";
    
  }
  if(getCookie("role")==""){

      document.getElementById('registarMenu').style.display = "none";
      document.getElementById('definicoes').style.display = "none";
      document.getElementById('relatorios').style.display = "none";
      document.getElementById('ocorrencias').style.display = "none";
      document.getElementById('artigos').style.display = "none";
      document.getElementById('entradas').style.display = "none";
      
    }

});

*/