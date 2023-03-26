let s_atual=1;
let s_max=4;
let s_temp=5000;


function troca(){ 
    document.getElementById("b"+s_atual).style.visibility="hidden";
      
    s_atual=s_atual+1;
    if(s_atual>=s_max){
        s_atual=1
    }
    document.getElementById("b"+s_atual).style.visibility="visible";
}


function slider(){
    document.getElementById("b1").style.visibility="visible";
    document.getElementById("b2").style.visibility="hidden";
    document.getElementById("b3").style.visibility="hidden";
    sliderTimer=setInterval(troca,s_temp);
    }
    