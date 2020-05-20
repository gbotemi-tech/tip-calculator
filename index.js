document.getElementById("container").onchange = function () {
    const bill = Number(document.getElementById("billTotal").value);
    const tipPercent = document.getElementById("tipInput").value;
    const split = document.getElementById("splitInput").value;

    const tipValue = bill * (tipPercent / 100);
    const newBillEach = (bill + tipValue) / split;
    const tipEach = (tipValue/split);


    document.getElementById("tipOutput").innerHTML = tipPercent + "%";
    document.getElementById("splitOutput").innerHTML = split;
    document.getElementById("newBill").innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML = "$" + tipEach.toFixed();


}