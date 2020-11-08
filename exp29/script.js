const countWords = () => {
  
  document.getElementById("outputTxt").style.display = "block";

  var str = document.getElementById("Txt").value;

  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  let count = str.split(' ').length;

  document.getElementById("outputTxt").innerHTML = "<b>Total Words => </b>" + count;
  
}