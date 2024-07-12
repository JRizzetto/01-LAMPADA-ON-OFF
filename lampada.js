const turnOnOff = document.getElementById ('turnOnOff'); 
const lamp = document.getElementById('lamp'); 

function isLampBroken () {
    return lamp.src.indexOf ("quebrada") > -1; 
}

function lampOn () {
    if (!isLampBroken ()) {         // Se a lâmpada não estiver quebrada, ligar. 
    lamp.src = "./img/ligada.jpg";
} 
}

function lampOff () {
    if (!isLampBroken ()) {         // Se a lâmpada não estiver quebrada, desligar.         
    lamp.src = "./img/desligada.jpg";
}
}

function lampBroken () {
    lamp.src = "./img/quebrada.jpg";
}

function lampOnOff () {
    if (turnOnOff.textContent == "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    } else {
        lampOff ();
        turnOnOff.textContent = "Ligar"; 
    }
}

turnOnOff.addEventListener ("click", lampOnOff); 
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseout", lampOff);
lamp.addEventListener ("dblclick", lampBroken);  
