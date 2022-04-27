function abreAba(abaAberta){
    document.querySelector('.aba-lateral').style.transform="translateX(0)";
    document.getElementById(abaAberta).classList.add("guias-site-selected");

    for(num=1;num<=4;num++){
        if(document.getElementById(abaAberta).id!="guia"+num){
            document.getElementById("guia"+num).classList.remove("guias-site-selected");
        }
        if(document.getElementById(abaAberta).id=="amigoleal"){
            document.getElementById("amigoleal").classList.remove("guias-site-selected");
        }
    }
    document.querySelector('.aba-lateral').id=abaAberta;
}
function fechaAnimalSelection(){
    document.querySelector('.animal-selection').classList.toggle("closed-animal-selection");
}