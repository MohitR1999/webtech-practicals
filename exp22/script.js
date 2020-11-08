const swapCases = () => {
  
  document.getElementById("inputTxt").style.display = "block";
  document.getElementById("outputTxt").style.display = "block";

  var str = document.getElementById("Txt").value;

  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const result = [];
  
  for(let x=0; x<str.length; x++)
  {
	    if(UPPER.includes(str[x]))
	    {
	      result.push(str[x].toLowerCase());
	    }
	    else if(LOWER.includes(str[x]))
	    {
	      result.push(str[x].toUpperCase());
	    }
	    else 
	    {
	      result.push(str[x]);
	    }
  }

  document.getElementById("inputTxt").innerHTML = "<b>Input String => </b>" + str;
  document.getElementById("outputTxt").innerHTML = "<b>Output String => </b>" + result.join('');
  
}