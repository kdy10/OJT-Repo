const balanceAmount = document.getElementById('balanceAmount');
const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const message = document.getElementById('message');
const historyList = document.getElementById('history-list');


let balance = 100;  // initial balance 
let dailyWithdraw = 0;
const dailyLimit = 500; 


function transactionHistory(type, amount) {   //  add to transaction history
    const listItem = document.createElement('li');
    listItem.textContent = type + ": $" + amount;
    historyList.appendChild(listItem);
}

function deposit() {        // when deposit button is clicked and entered a valid amount, update balance
    const amount = amountInput.value.trim();
    if (amount === '' || Number(amount) <= 0) {
        message.innerText = 'Enter a valid amount.';
        message.style.color = 'red';
        return;
    }
    balance += Number(amount);
    transactionHistory("Deposited", amount);
    balanceAmount.innerText = "$" + balance;
    message.innerText = "Successfully deposited $" + Number(amount);
    amountInput.value = '';

}

function withdraw() {   // when withdraw button is clicked and entered a valid amount, update balance
    const amount = amountInput.value.trim();    
    if (amount === '' || Number(amount) <= 0) {
        message.innerText = 'Enter a valid amount.';
        message.style.color = 'red';
        return;
    }
    if (Number(amount) > balance) {
        message.innerText = 'Insufficient amount.';
        message.style.color = 'red';
        return;
    }
    if (dailyWithdraw + Number(amount) > dailyLimit) {  // check daily limit
        message.innerText = 'Daily withdrawal limit reached!';
        message.style.color = 'red';
        return;
    }
    balance -= Number(amount);
    dailyWithdraw += Number(amount);
    transactionHistory("Withdrew", amount);
    balanceAmount.innerText = "$" + balance;
    message.innerText = "Successfully withdrew $" + Number(amount);
    amountInput.value = '';
}

// added event listeners to buttons to call its functions
depositButton.addEventListener('click', deposit);   
withdrawButton.addEventListener('click', withdraw);



