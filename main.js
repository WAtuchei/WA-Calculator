/*First version is on 29 Oct*/
/*Start Another version JS on 31 October*/
/*Finish Calculate Function on 1 November and not Debug yet*/
/*on 1 Nov seperate nums and operators*/
/*3 Nov remove History*/

Version = 2.5 /*7 Nov add parameter and Change display into parameters also some debug */
Version = 2.6 /*8 Nov after Equal (=) get new Number or operator, Problem is para = paraP = RESET*/
Version = 2.7 /*use paraP only after use "=", let Preview do its work*/
Version = 2.8 /*9 Nov Change font size if exeed length and after use Equal it can use "."*/
              /*Finish Final version*/
              
/*Call HTML */
const ResultDisplay = document.getElementById('ResultDisplay');
const Preview = document.getElementById('Preview');
const CalBTN = document.querySelectorAll('#BTN');
const OP = document.querySelectorAll('#OP');
const ClearBTN = document.getElementById('ClearBTN');
const History = document.getElementById('History');

let para;
let paraP;

/*Set All Zero*/
const SetZero = () => {
    para = "";
    ResultDisplay.innerText = 0
    paraP = "";
    Preview.innerText = paraP
}


/*์Numbers Button*/
for (buttons of CalBTN){
    buttons.addEventListener('click', (e) => {
        BTNValue = e.target.innerText

        if(para == ""){
            if(BTNValue == "0"){
                para = "";
            }
            else if(BTNValue == "."){
                ResultDisplay.innerText += BTNValue
                para += BTNValue
            }
            else{
            ResultDisplay.innerText = BTNValue
            para = BTNValue
            }
        }
        else if(para == paraP){
            if(BTNValue == "."){
                SetZero();
                ResultDisplay.innerText += BTNValue
                para += BTNValue
            }
            else{
                ResultDisplay.innerText = BTNValue
                para = BTNValue
                paraP = "";
            }
        }
        else if(para.length > 15){
            ResultDisplay.style.fontSize = "2rem"
        }
        else{
            ResultDisplay.innerText += BTNValue
            para += BTNValue
            if(para.length > 2){
                Preview.innerText = eval(para)
            }
        }
    })
}

/*Operators*/
for (buttons of OP){
    buttons.addEventListener('click', (e) => {
        BTNValue = e.target.innerText

        if(para == ""){
            if(BTNValue == "("){
                ResultDisplay.innerText = BTNValue
                para = BTNValue
            }
        }
        else if(BTNValue == "–"){
            ResultDisplay.innerText += BTNValue
            BTNValue = "-"
            para += BTNValue
            Preview.innerText = eval(para)
        }
        else if(BTNValue == "x"){
            ResultDisplay.innerText += BTNValue
            BTNValue = "*"
            para += BTNValue
            Preview.innerText = eval(para)
        }
        else if(BTNValue == "÷"){
            ResultDisplay.innerText += BTNValue
            BTNValue = "/"
            para += BTNValue
            Preview.innerText = eval(para)
        }
        else if(BTNValue == "%"){
            para /= 100;
            Preview.innerText = eval(para)
        }
        else if(BTNValue == "="){
                if(Preview.innerText == ""){
                    (BTNValue == "=").disabled = true;
                }
                else{
                ResultDisplay.innerText = Preview.innerText
                para = ResultDisplay.innerText
                paraP = ResultDisplay.innerText
                Preview.innerText = "";
                }
        }
        else if(para.length > 15){
            ResultDisplay.style.fontSize = "2rem"
        }
        else{
            ResultDisplay.innerText += BTNValue
            para += BTNValue
            Preview.innerText = eval(para)
        }
    })
}



/*Events*/
document.body.addEventListener('onload', SetZero());
ClearBTN.addEventListener('click', SetZero);
