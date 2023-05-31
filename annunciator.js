function indicator_on(id, blinking = false){
    let element = document.getElementById(id);
    element.classList.remove("sts-off");
    if(blinking){
        indicator_blink(id);
    }
}

function indicator_off(id, blinking = false){
    let element = document.getElementById(id);
    element.classList.add("sts-off");
    if(blinking){
        indicator_blink(id);
    }
}

function indicator_blink(id){
    let element = document.getElementById(id);
    element.classList.add("blink");
    element.addEventListener("click", blink_click)
}

function blink_click(){
    let element = this;
    element.classList.remove("blink");
    element.removeEventListener("click", blink_click);
}
