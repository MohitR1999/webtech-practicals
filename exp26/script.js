const isHex = () => {
  	document.getElementById('outputTxt').style.display = 'block';

  	var str = document.getElementById('str').value;

    var a = parseInt(str,16);

    if(a.toString(16)===str) {
        document.getElementById('outputTxt').innerHTML = "Yes, The input value is Hexadecimal";
        document.getElementById('outputTxt').style.color = '#5FDF3B';
    } else {
        document.getElementById('outputTxt').innerHTML = 'No, The input value is NOT Hexadecimal';
        document.getElementById('outputTxt').style.color = 'red';
    }
}