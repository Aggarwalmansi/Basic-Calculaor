const dispaly = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener("click",(event)=>{
        const buttonValue = event.target.innerText;

        if (buttonValue === 'C') {
            currentInput = '';
            dispaly.innerText= "0";
        } 
        else if (buttonValue === '=') {
            try {
                currentInput = eval(currentInput).toString();
                dispaly.innerText = currentInput;

            }
            catch(error)
             {
                updateDisplay('Error');
                currentInput = '';
            }
        }
        else if (buttonValue ==="<") {
            currentInput = currentInput.slice(0,-1);
            dispaly.innerText = currentInput||0;
        } 
        else{
            currentInput += buttonValue;
            dispaly.innerText = currentInput;

        }   


    });
});    

