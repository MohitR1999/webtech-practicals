const italics = () => {
    document.getElementById("text").style.fontStyle = "italic";
}

const underlines = () => {
    document.getElementById("text").style.textDecoration = "underline";
}

document.getElementById("text").addEventListener("mouseover", ()=>{
    document.getElementById("text").style.fontWeight = "bold";
});