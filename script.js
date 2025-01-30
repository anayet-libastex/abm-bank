/*log in button event handler*/

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

/*deposit button event handler*/
const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");
    if (isNaN(depositNumber) || depositNumber <= 0) {
        alert("You should enter a valid deposit amount");   
    }
    else {
        updateSpanText("currentDeposit",depositNumber);
        updateSpanText("currentBalance",depositNumber);
    }
    document.getElementById("depositAmount").value = "";
})
 //withdraw button event handler  
   const addWithdrawBtn = document.getElementById("addWithdraw");
   addWithdrawBtn.addEventListener("click", function() {
       const withdrawNumber = getInputNumber("withdrawAmount");
       if (isNaN(withdrawNumber) || withdrawNumber <= 0) {
        alert("You should enter a valid withdraw amount");   
       } else {
        updateSpanText("currentWithdraw",withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);  
       }
       document.getElementById("withdrawAmount").value = "";
   });

   function getInputNumber(id) {
      const amount = document.getElementById(id).value;
      const amountNumber = parseFloat(amount);
      return amountNumber;
   }

    function updateSpanText(id, depositNumber) {
            const currentAmount = document.getElementById(id).innerText;
            const currentNumber = parseFloat(currentAmount);
            const totalAmount = depositNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;      
    }

    
