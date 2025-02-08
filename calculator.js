const display = document.querySelector('#display');

const buttons = document.querySelectorAll("button");


buttons.forEach((item) => {
    item.oneclick =()=>{
        if(item.id==='clear'){
            display.innerText='';
        } else if(item.id==='backspace'){
            let string = display.innerText.string();
            display.innerText = string.substr(0,string.length-1);

        }
        else if(display.innerText != "" && item.id=="equa"){
            display.innerText = eval(display.innerText);
        }
        else{
            display.innerText +=item.id;
        }
}});
