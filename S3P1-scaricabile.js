/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num1 = 2;
// let num2 = 3;

// function crazySum(n1, n2) {
//     let res
//     if (n1 === n2) {
//       res = (n1 + n2) *3
//         return res
//     }
//     console.log(n1 + n2)
// }

// console.log(crazySum(num1, num2))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 21

// function boundary(n) {
//    return (n >= 20 && n <= 100) || (n === 400);
// }
// console.log(boundary(num));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let name = "Mattia";

// function reverseString(string) {
//     let splString = string.split("");
//     let revString = splString.reverse();
//     return revString.join("");
// }
// console.log(reverseString(name))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let myString = "Non ho più pazienza!"

// function upperFirst(a) {
//     let stringArray = a.split(" ")
//     for (let i = 0; i < stringArray.length; i++) {
//         let word = stringArray[i];
//         let maiuscWord = word.substring(0, 1).toUpperCase();
//         let minuscWorld = word.substring(1, word.length).toLowerCase();
//         let totalWord = maiuscWord + minuscWorld;
//         stringArray[i] = totalWord
        
//     }
//     return stringArray.join(' ')
// }
// let result = upperFirst(myString);
// console.log(result)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// function giveMeRandom(random) {
//     let min = 0;
//     let max = 10;
//     let n = Math.floor(Math.random() * max) + min;
//     return n
// }
// let result = giveMeRandom();
// console.log(result)

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let l1 = 5;
// let l2 = 3;

// function area(a, b) {
//     return a * b;
// }

// let result = area(l1, l2);
// console.log(result)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let n = 19;
// let nf = -30;

// function crazyDiff(a, b) {
//     let x = a - b
//     Math.abs(x)
//     if (x > 19) {
//         return (Math.abs(x))*3
//     }
//     return Math.abs(x);
// }

// let result = crazyDiff(n, nf);
// console.log(result)




/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let word1 = "view"

// function codify(a) {
//     if (a.includes("code")) {
//         return a;
//     }
//     return "code" + a
// }

// let result = codify(word1)
// console.log(result)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let n = 21

// function check3and7(a) {
//     if ((a % 3 === 0) || (a % 7 === 0)) {
//         return true;
//     } 
//     return false;
    
// }

// let result = check3and7(n)
// console.log(result)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let word = "Epicode"

// function cutString(a) {
//     return a.slice(1, -1)
// }
//  let result = cutString(word)
//  console.log(result)