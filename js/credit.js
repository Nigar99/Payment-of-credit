confirm("Payment of credit");
amount = prompt("Enter the amount(with number)"); //45
month = prompt("Enter the month(with number)"); //4
document.getElementById("amount").innerHTML = "Total payment: " + amount + "azn";
if (month>=1 && month <= 12) {
    var Result, residue;
    residue = amount % month; //1
    Result = amount / month; //11,..
    var ResultFloor=Math.floor(Result);
    var text = "";
    var i = 1;
    while (i <= month) {
        var end;
        var h;
        var x = i % 10;
        switch (x) {
            case 6:
                h = "cı";
                break;
            case 1:
            case 2:
            case 5:
            case 7:
            case 8:
                h = "ci";
                break;
            case 3:
            case 4:
                h = "cü";
                break;
            case 9:
            case 10:
                h = "cu";
        }
        end = text + (i + "-" + h + " ay: " + (ResultFloor + residue).toFixed(0) + "azn");
        text += i + "-" + h + " ay: " + ResultFloor + "azn <br>";
        i++;
    }
    document.getElementById("credit").innerHTML = end;
}
else {
    alert("The number entered in the section of the month should be in the range [1,12]")
}