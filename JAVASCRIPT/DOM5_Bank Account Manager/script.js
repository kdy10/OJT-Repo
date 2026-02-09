const balanceAmount = document.getElementById('balanceAmount');
const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const message = document.getElementById('message');
let balance = 100;  


depositButton.addEventListener('click', deposit);   
withdrawButton.addEventListener('click', withdraw);



/* * DOCU: Processe user deposit by validating the input and updating the total balance.
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
    balanceAmount.innerText = "$" + balance;
    message.innerText = "Successfully deposited $" + Number(amount);
    amountInput.value = '';

}


/* * DOCU: Process user withdrawal by checking if the input is valid and if there are enough funds
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
    balance -= Number(amount);
    balanceAmount.innerText = "$" + balance;
    message.innerText = "Successfully withdrew $" + Number(amount);
    amountInput.value = '';
}





