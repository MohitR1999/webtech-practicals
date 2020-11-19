const insertString = () => {
  	document.getElementById('outputTxt').style.display = 'block';

	var str1 = document.getElementById('string1').value; 
    var str2 = document.getElementById('string2').value;
    var pos = parseInt(document.getElementById('position').value); 
    

    document.getElementById('outputTxt').innerHTML = "<b>Output => </b>" + [str1.slice(0,pos), str2, str1.slice(pos)].join('');
  
}