const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const arabicToRoman = (input) =>{
   const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1


   }

   let result = "";
   for(let prop in romanNumerals){
    while(input >= romanNumerals[prop]){
        result += prop;
        input -= romanNumerals[prop];


    }

   }
   
return result;
}



const checkInput = () =>{
    
    
    if(!numberInput.value || isNaN(numberInput.value) || parseFloat(numberInput.value) !== parseInt(numberInput.value)){
        result.textContent = "Please enter a valid number!";
             
    }else if(numberInput.value <= 0){
        result.textContent = "Please enter a number greater than or equal to 1";

    }else if(numberInput.value >= 4000){
        result.textContent = "Please enter a number less than or equal to 3999";

    }else{
        result.textContent = arabicToRoman(numberInput.value);
    }

    numberInput.value = ""

  
    

}



numberInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        checkInput();
    }
})
convertBtn.addEventListener("click", checkInput)
