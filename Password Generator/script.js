const lengthInputEl = document.getElementById("lengthInput");
const includeUppercaseEl = document.getElementById("includeUppercase");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeLowercaseEl = document.getElementById("includeLowercase");
const generatePasswordBtn = document.getElementById("generatePassword");
const resetBtn = document.getElementById("resetButton");
const passwordOutput = document.getElementById("passwordResult");




// console.log(lengthInputEl);
// console.log(includeUppercaseEl);
// console.log(includeNumbersEl);
// console.log(includeLowercaseEl);
// console.log(generatePasswordBtn);
// console.log(passwordOutput);
// console.log(resetBtn);
    







const generatePassword = (userInputlength, isCheckedUpperCase, isCheckedNumbers, isCheckedLowercase) => {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let passwordValue = "";

    
    if (isCheckedUpperCase) passwordValue += upperCase;
    if (isCheckedNumbers) passwordValue += numbers;
    if (isCheckedLowercase) passwordValue += lowerCase;

   const pass = Array.from({ length: userInputlength }, () =>
        passwordValue[Math.floor(Math.random() * passwordValue.length)]
    ).join("");


    return pass; 


}




let validatePassword = () => {
    const isValid = true;
    if (lengthInputEl.value === "") {
        alert("Please enter a length in the input field!"); 
        isValid = false;
    }
    if (includeUppercaseEl.checked === false && includeNumbersEl.checked === false && includeLowercaseEl.checked === false) {
        alert("Please select at least one character type!"); 
        isValid = false;
    }


}





generatePasswordBtn.addEventListener("click", () => {
    const userInputlength = lengthInputEl.value;
    const isCheckedUpperCase = includeUppercaseEl.checked;
    const isCheckedNumbers = includeNumbersEl.checked;
    const isCheckedLowercase = includeLowercaseEl.checked;
    // console.log(userInputlength);
    // console.log(isCheckedUpperCase);
    // console.log(isCheckedNumbers);
    // console.log(isCheckedLowercase);

    const finalPassword = generatePassword(userInputlength, isCheckedUpperCase, isCheckedNumbers, isCheckedLowercase);
    console.log(finalPassword);

    passwordOutput.textContent = finalPassword; 

    validatePassword(); 
    
})


resetBtn.addEventListener("click", () => {
    lengthInputEl.value = 12; 
    includeUppercaseEl.checked = true; 
    includeNumbersEl.checked = true;
    includeLowercaseEl.checked = true; 
})