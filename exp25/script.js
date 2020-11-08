const isDate = () => {
  	document.getElementById('outputTxt').style.display = 'block';

  	var str = document.getElementById('str').value;
  
  	var flag = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
    if (flag!=null)
      {
        document.getElementById('outputTxt').innerHTML = flag;
      }
    else
      {
        document.getElementById('outputTxt').innerHTML = "No Date found";
      }
  
}