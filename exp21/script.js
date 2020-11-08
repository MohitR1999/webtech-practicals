const sortElements = () => {
  
  document.getElementById("showSrt").style.display = "block";
  document.getElementById("showUnSrt").style.display = "block";

  var str = document.getElementById("array").value;
  var stringArray = str.split(" ");
  var numberArray = stringArray.map(Number);
  document.getElementById("showUnSrt").innerHTML = `Input Elements => ${numberArray}`;
  numberArray.sort( (a,b)=>a-b );
  document.getElementById("showSrt").innerHTML = "Sorted Elements => " + numberArray;
}