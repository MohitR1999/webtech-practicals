document.getElementById("Vishal").style.display = "none";
document.getElementById("Yash").style.display = "none";

const showVishal = () => {
  var x = document.getElementById("Vishal");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("visBtn").innerHTML = "Hide Stats";
  } else {
    x.style.display = "none";
    document.getElementById("visBtn").innerHTML = "Show Stats";
  }
}

const showYash = () => {
  var x = document.getElementById("Yash");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("yashBtn").innerHTML = "Hide Stats";
  } else {
    x.style.display = "none";
    document.getElementById("yashBtn").innerHTML = "Show Stats";
  }
}