const checkString = () => {
  document.getElementById("result").style.display = "block";
  var str = document.getElementById("text").value;

  if(str.match(/^[0-9]+$/)){
    document.getElementById("result").innerHTML = "String: False";
  }
  else{
    if(str===null || str==="")
      document.getElementById("result").innerHTML = "String: True <br>Blank: True";
    else
      document.getElementById("result").innerHTML = "String: True <br>Blank: False";
  }
}