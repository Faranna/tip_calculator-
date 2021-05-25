var bill_Amount = document.getElementById("bill-amount");
var tip_percentage = document.getElementById("tip-percentage");
var tip_amount = document.getElementById("tip-amount");
var total_bill= document.getElementById("total-bill");
var button = document.getElementById("btn");



button.addEventListener('click', function(){
    var amount_one = bill_Amount.value;
    var amount = bill_Amount.value * ( tip_percentage.value / 100);
    tip_amount.value = amount;
    total_bill.value = parseFloat(amount_one) + parseFloat(amount);
})