document.getElementById("button").onClick = function(){
    const amount = document.getElementById("amount").value;
    const fromcurrency = document.getElementById("fromcurrency").value;
    const tocurrency = document.getElementById("tocurrency").value;

    const exchrate = {
        USD : 1,
        EUR : 0.85,
        JPY : 110,
        INR : 82.2
    }

    const finalAmount = amount/exchrate[fromcurrency] * exchangeRate[tocurrency];
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${amount} ${fromcurrency} is approximately ${finalAmount.toFixed(2)} ${tocurrency}`;
}