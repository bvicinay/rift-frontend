var currSection = "details";
var editBtnSet = false;


// Edit personal info functions
function disableEdit() {
    var sec_inputs=document.getElementById('info').getElementsByTagName('input');
    for(i=0;i<sec_inputs.length;i++){
        sec_inputs[i].disabled=true;
    }    
}
function enableEdit(){
    sec_inputs=document.getElementById(currSection).getElementsByTagName('input');
    for(i=0;i<sec_inputs.length;i++){
        sec_inputs[i].disabled=false;
    } 
}

// About Section Sidemenu 
function menuShow(btnId) {
    var id = btnId.substring(0, btnId.length-4);
    document.getElementById(currSection).classList.add("hide");
    document.getElementById(currSection + "-btn").classList.remove("menu-active");
    document.getElementById(id).classList.remove("hide");
    document.getElementById(btnId).classList.add("menu-active");
    currSection = id; 
}

function createEditBtns() {
    var htmlString = "<img src='edit-icon.svg' class='edit-icon' onclick='enableEdit()'/>";
    sections = document.getElementById("info").getElementsByClassName("content-card");
    for (var i = 0; i < sections.length; i++) {
        sections[i].insertAdjacentHTML('afterbegin', htmlString);
    }
    
}

function setup() {
    createEditBtns();
    disableEdit();
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


ready(setup);



