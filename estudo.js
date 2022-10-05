
1
//alert("Oi, eu sou um alert!");
2
//console.log ("Oi, eu estou no console.");
3
//document.write("Aula de Pens. Comp.")
4
​
5
let tabuada = 111;
6
​
7
function meChame(nome) {
8
    document.write ("<h1>Tabuada do " + tabuada + "</h1>")
9
    document.write (tabuada + " x 1 = " + (tabuada * 1) + "<br>");
10
    document.write (tabuada + " x 2 = " + (tabuada * 2) + "<br>");
11
    document.write (tabuada + " x 3 = " + (tabuada * 3) + "<br>");
12
    document.write (tabuada + " x 4 = " + (tabuada * 4) + "<br>");
13
    document.write (tabuada + " x 5 = " + (tabuada * 5) + "<br>");
14
    document.write (tabuada + " x 6 = " + (tabuada * 6) + "<br>");
15
    document.write (tabuada + " x 7 = " + (tabuada * 7) + "<br>");
16
    document.write (tabuada + " x 8 = " + (tabuada * 8) + "<br>");
17
    document.write (tabuada + " x 9 = " + (tabuada * 9) + "<br>");
18
    document.write (tabuada + " x 10 = " + (tabuada * 10) + "<br><br>");
19
    document.write ("Feita por " + nome);
20
}
21
​
22
//For (inicio; validação, manutenção)
23
function escreva(){ 
24
    for(var i = 0; i < 11; i ++){
25
​
26
        document.write(tabuada + " x " + i + " = " + (tabuada*i) + "<br>");
27
​
28
    }
29
}
30
function quadrado(){
31
    for(var i = 2; i < 101; i++){
32
        document.write("O quadrado de " = i + " é " + (i*i) + "<br>")
33
    }
34
​
35



