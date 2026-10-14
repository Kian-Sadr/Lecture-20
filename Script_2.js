//Collecting elements for easier reading later
var output = document.getElementById("output");
var msg_box = document.getElementById("Message_box");
var id_box = document.getElementById("id_select");
let current;    /*Will be a JS object*/
let json_obj; /*This is in JSON language*/

function json_parse(){
  json_object = '{"id":0, "message": "Hello World"}';
  json_print();
}

function json_print(){
  current = JSON.parse(json_obj);
  output.innerHTML = "ID: "+current.id + <br> + "Message: "+current.message;
}

function json_read(){
  let js_object = {
    id: id_box.value,
    message: msg_box.value;
  };


  json_obj = JSON.stringify(js_object);
  json_print();
}
