 let input=document.getElementById("inputbox");
 let buttons=document.querySelectorAll("button");
 let string ='';
 let arr=Array.from(buttons);
 arr.forEach(buttons=>{
    buttons.addEventListener('click',mouseclick);
})
input.addEventListener('input',handleinput);

function mouseclick(e){
    const clickvalue= e.target.innerHTML;
    if(clickvalue==='='){
        equal();
    }
    else if(clickvalue==='AC'){
        clear();
    }
    else if(clickvalue==='DEL'){
        del();
    }
    else{
        addtoinput(clickvalue);
    }
}

function handleinput(){
    string=input.value;
}

function equal(){
    string=eval(string);
    input.value=string;
}
function clear(){
    string='';
    input.value=string;
}
function del(){
    string=string.substring(0,string.length-1);
    input.value=string;
}
function addtoinput(value){
    string=string+value;
    input.value=string;
}


