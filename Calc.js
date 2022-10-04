function Calc(){
    var ans;
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    ans = a * b;
    document.getElementById('answer').innerHTML = ans;
}