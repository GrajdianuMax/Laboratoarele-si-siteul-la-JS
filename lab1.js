js 
=======
console.log("Laboratorul Nr.1");

number = [];
numberCopy = [];
function getInputValue() {
    input = document.getElementById("myInput").value.split(',');
    for (i = 0; i < input.length; i++) {
        if (input[i] <= 10)
            number[i] = parseInt(input[i]);
    }  console.log(number);

    function renescenseNumber() {
        for (var i = 0; i < number.length; i++)
            numberCopy[i] = number[i];
    } renescenseNumber();

    function min(){
        var min = number[0];
        for (var i = 0; i < number.length; i++) {
            if (number[i] <= min) {
                min = number[i];
            }
        } console.log('Minimul este ---> ' + min);
    } min();

    function max(){
        var max = number[0];
        for (var i = 0; i < number.length; i++) {
            if (number[i] >= max) {
                max = number[i];
            }
        }
        console.log('Maximul este ---> ' + max);
    } max();

    function media() {
        var s = 0;
        for (var i = 0; i < number.length; i++) {
            s += number[i];
        }
        media = s / number.length;
        console.log('Media aritmetica este ---> ' + media);
    } media();

    function formaCrescatoare() {
        numberCopy.sort(function (a, b) {
            return a - b
        })
        console.log('Tabel in forma crescatoare ---> ' + numberCopy);
    } formaCrescatoare();

    function formaDescrescatoare() {
        numberCopy.sort(function (a, b) {
            return b - a
        })
        console.log('Tabel in forma descrescatoare ---> ' + numberCopy);
    } formaDescrescatoare();

    renescenseNumber();
    var arr = [];
    arr[0] = numberCopy[numberCopy.length - 1];
    arr[1] = numberCopy[numberCopy.length - 2];
    for (var i = 0; i < numberCopy.length - 2; i++) {
        arr[i + 2] = numberCopy[i];
    } console.log('Rotirea tabelului la stanga ---> ' + arr);

    renescenseNumber();
    numberCopy.push(17);
    console.log('Adaugarea numarului 17 ---> ' + numberCopy);
    numberCopy.splice(2, 1);
    console.log('Stergerea unui element ---> ' + numberCopy);

    function note9_10() {
        var nr = 0;
        var total = 0;
        var rezultat = 0;
        for (var i = 0; i <= number.length; i++){
            if (number[i] >= 9){
                nr += 1;
                total += number[i]
            }
            rezultat = total/number.length;
        } console.log('In total sunt --> ' + nr + ' note de 9 si 10');
          console.log('Calitata --> ' + rezultat);
    } note9_10();

    function procentulReusitei() {
        var s = 0;
        var rezultat = 0;
        for (var i = 0; i <= number.length; i++){
            if (number[i] >= 6){
                s += number[i];
            }
            rezultat = s/number.length;
        } console.log('Procentul reusitei ---> ' + rezultat + '%');
    } procentulReusitei();

}

function randoms() {
    var randoms = [...Array(9)].map(() => Math.floor(Math.random() * 10)+1);
    document.getElementById("myInput").value = randoms;
}

=======
html
=====
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> </title>
</head>

<body>
<label for="myInput">Note</label><br>
<input type="text"  id="myInput" onkeypress="isInputNumber(event);"><br>
<button type="button" onclick="getInputValue();">Set</button><br>
<button type="button" onclick="randoms();">Random</button><br>
<script>
    function isInputNumber(evt) {
        var ch = String.fromCharCode(evt.which);
        if (!/[0-9-,]/.test(ch)){
            evt.preventDefault();
        }
    }
</script>
<script type="text/javascript" src="js/logica.js"></script>
</body>
</html>