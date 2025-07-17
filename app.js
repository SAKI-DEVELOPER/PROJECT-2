let raw = [
  '0','1','2','3','4','5','6','7','8','9',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','t','z',
  '!','@','#','$','%','^','&','*','(',')','_','+','?',':','{','}','[',']',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];


let passwordInput = document.querySelector("input");
let random = () => {
    return Math.floor((Math.random() * 80));
}

let finalPass;
let passwordLength = 14;
let passwordGenerator = () => {
    let password = [];
    for(let i = 1; i <= passwordLength; i++){
        password.push(raw[random()]);
    }
    password = password.join("");
    passwordInput.value = password;
    finalPass = {
        password
    }
    return password;

}
//console.log(passwordGenerator());

document.querySelector(".generate").addEventListener("click", passwordGenerator);

let notification = document.querySelector(".notification");

let copied = document.createElement("span");
copied.textContent = `  copied!`;

let copyPassword = () => {
    console.log(finalPass.password);


  // Select the text field
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(passwordInput.value);   

    setTimeout(()=>{
        notification.classList.add("active");
        notification.innerHTML = `${finalPass.password}  `;
        notification.appendChild(copied);
        setTimeout(()=>{
           notification.classList.remove("active"); 
           notification.innerHTML = "";
        }, 2000)
    }, 200)
    
    
    
}

document.querySelector("i").addEventListener("click", copyPassword);