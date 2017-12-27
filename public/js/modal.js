
var modal = document.getElementById("window-popup");

var modalBtn = document.getElementById("button-popup");

var closeBtn = document.getElementById("button-popup-close");


modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOut);


function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}

function clickOut(e){
    if(e.target === modal){
	modal.style.display = 'none';
  }
}
