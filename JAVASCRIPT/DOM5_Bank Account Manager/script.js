const balanceAmount = document.getElementById('balanceAmount');
const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const message = document.getElementById('message');

let balance = 100;  // initial balance 

function deposit() {        // when deposit button is clicked and entered a valid amount
    const amount = amountInput.value.trim();
    if (amount === '' || Number(amount) <= 0) {
        message.innerText = 'Enter a valid amount.';
        message.style.color = 'red';
        return;
    }
    balance += Number(amount);
    balanceAmount.innerText = "$" + balance;
    message.innerText = "Successfully deposited $" + Number(amount);
    amountInput.value = '';

}

function withdraw() {   // when withdraw button is clicked and entered a valid amount    
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
    balance -= Number(amount);
    balanceAmount.innerText = "$" + balance;
    message.innerText = "Successfully withdrew $" + Number(amount);
    amountInput.value = '';
}

// added event listeners to buttons to call its functions
depositButton.addEventListener('click', deposit);   
withdrawButton.addEventListener('click', withdraw);



