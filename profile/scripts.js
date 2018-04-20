var currSection = "details";
var editBtnSet = false;


// Edit personal info functions
function disableEdit() {
    var sec_inputs=document.getElementById('info').getElementsByTagName('input');
    sec_inputs.concat(document.getElementById('info').getElementsByTagName('select'));
    for(var i=0;i<sec_inputs.length;i++){
        sec_inputs[i].disabled=true;
    }    
}
function enableEdit(){
    var sec_inputs=document.getElementById(currSection).getElementsByTagName('input');
    sec_inputs.concat(document.getElementById('info').getElementsByTagName('select'));
    for(var i=0;i<sec_inputs.length;i++){
        sec_inputs[i].disabled=false;
    }
    
    var currContent = "details"; // Change for details page pointer 
    
    var submitDiv = "<div class='submit-changes'><button class='save'>save</button><button class='cancel'>cancel</button></div>";
    document.getElementById(currContent).insertAdjacentHTML('beforeend', submitDiv); // append sve/cancel buttons here
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



