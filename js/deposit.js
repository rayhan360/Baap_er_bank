/**
 * Algorithm set: 
 * step-1: add event listener to the deposit button
 * step-2: get the deposit amount from the deposit input field 
 * step-3: get the current deposit total
 * step-4: add numbers to set the total deposit
 * step-5: get balance current total
 * step-6: calculate current total balance
 * step-7: clear the deposit field
 */


document.getElementById('btn-deposit').addEventListener('click', function(){
    // input field section
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    // empty system
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }


    // total deposit section
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    // total balance section
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    

})