// CONFIG

var blinkOnAlarm = false;
var blinkOnPutout = true;

// INDIVIDUAL INDICATOR CONTROLS

function indicator_on(id){
    let element = document.getElementById(id);
    element.classList.remove("sts-off");
    if(blinkOnAlarm){
        indicator_blink(id);
    }
}

function indicator_on(id, blinking){
    let element = document.getElementById(id);
    element.classList.remove("sts-off");
    if(blinking){
        indicator_blink(id);
    }
}

function indicator_off(id){
    let element = document.getElementById(id);
    element.classList.add("sts-off");
    if(blinkOnPutout){
        indicator_blink(id);
    }
}

function indicator_off(id, blinking){
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

// ANNUNCIATOR DASHBOARD CONTROLS

function setBlinkOnAlarm(enable){
    if(enable && typeof enable == "boolean"){
        blinkOnAlarm = enable;
    }else{
        throw new Error("Value is not Boolean!");
    }
}

function setBlinkOnPutout(enable){
    if(enable && typeof enable == "boolean"){
        blinkOnAlarm = enable;
    }else{
        throw new Error("Value is not Boolean!");
    }
}