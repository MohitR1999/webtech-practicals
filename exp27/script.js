const Bin = () => {
  	document.getElementById('outputTxt').style.display = 'block';

  	let val = document.getElementById('decimal').value;

    let bin = parseInt(val, 10);

    document.getElementById('outputTxt').innerHTML = "Binary => " + bin.toString(2);
}

const Oct = () => {
    document.getElementById('outputTxt').style.display = 'block';

    let val = document.getElementById('decimal').value;

    let bin = parseInt(val, 10);

    document.getElementById('outputTxt').innerHTML = "Octal => " + bin.toString(8);
}

const Hex = () => {
    document.getElementById('outputTxt').style.display = 'block';

    let val = document.getElementById('decimal').value;

    let bin = parseInt(val, 10);

    document.getElementById('outputTxt').innerHTML = "Hexadecimal => " + bin.toString(16);
}