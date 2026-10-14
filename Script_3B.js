//Collecting elements for easier reading later
let output = document.getElementById("content");

function print_text(){
  output.textContent = "Apple";
}

function print_large(){
  output.innerHTML = "<h3>Apple</h3>";
}

export default print_text;
