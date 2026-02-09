const balanceAmount = document.getElementById('balanceAmount');
const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const message = document.getElementById('message');
const historyList = document.getElementById('history-list');
let balance = 100;   
let dailyWithdraw = 0;
const dailyLimit = 500; 


depositButton.addEventListener('click', deposit);   
withdrawButton.addEventListener('click', withdraw);


/* * DOCU: Adds a history of a  transaction.
 * @param {string} type - The type of the transaction ("Deposit" or "Withdrawal")  
 * @param {number} amount - The dollar amount involved in the transaction  
 * @returns {void} - Creates and appends a new list item to the history display  
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function transactionHistory(type, amount) {   //  add to transaction history
    const listItem = document.createElement('li');
    listItem.textContent = type + ": $" + amount;
    historyList.appendChild(listItem);
}


/* * DOCU: Processe user deposit by validating the input,  updating the total balance, and adding to transaction history.
 * @param {None} - Takes input directly from the amountInput DOM element
 * @throws {None} - Handles errors by displaying a error message
 * * Last Updated: 2026-02-09 
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function deposit() {      
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


/* * DOCU: Process user withdrawal by checking if the input is valid, if there are enough funds, and if the daily limit is not exceeded
 * @param {None} - Takes input directly from the amountInput DOM element
 * @throws {None} - Displays error messages for invalid inputs or low balance
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function withdraw() {  
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
    if (dailyWithdraw + Number(amount) > dailyLimit) { 
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





