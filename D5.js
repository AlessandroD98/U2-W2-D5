// /*
// REGOLE
// - Tutte le risposte devono essere scritte in JavaScript
// - Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
// - Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
// - Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
// */

// /* ESERCIZIO 1
//     Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
// */
console.log("------ESERCIZIO1-----");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// /* ESERCIZIO 2
//     Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
// */
console.log("------ESERCIZIO2-----");

// // pets.sort();
// // console.log(pets);

// /* ESERCIZIO 3
//     Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
// */
console.log("------ESERCIZIO3-----");

// // for (let i = pets.length - 1; i >= 0; i--) {
// //   console.log(pets[i]);
// // }

// /* ESERCIZIO 4
//     Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
// */
console.log("------ESERCIZIO4-----");

// // pets.shift();
// // pets.push("cat");
// // console.log(pets);

// /* ESERCIZIO 5
//     Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
console.log("------ESERCIZIO5-----");

// // const cars = [
// //   {
// //     brand: "Ford",
// //     model: "Fiesta",
// //     color: "red",
// //     trims: ["titanium", "st", "active"],
// //   },
// //   {
// //     brand: "Peugeot",
// //     model: "208",
// //     color: "blue",
// //     trims: ["allure", "GT"],
// //   },
// //   {
// //     brand: "Volkswagen",
// //     model: "Polo",
// //     color: "black",
// //     trims: ["life", "style", "r-line"],
// //   },
// // ];

// // for (let i = 0; i < cars.length; i++) {
// //   cars[0].licensePlate = "12312";
// //   cars[1].licensePlate = "13215";
// //   cars[2].licensePlate = "13554";
// //   console.log(cars[i]);
// // }

// /* ESERCIZIO 6
//     Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
//     Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
// */
console.log("------ESERCIZIO6-----");

// // for (let i = 0; i < cars.length; i++) {
// //   cars[i].trims.shift();
// //   console.log(cars);
// // }

// /* ESERCIZIO 7
//     Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
// */
console.log("------ESERCIZIO7-----");

// // const justTrims = [];

// // for (let i = 0; i < cars.length; i++) {
// //   const removed = cars[i].trims.shift();
// //   justTrims.push(removed);
// // }
// // console.log(justTrims);

// /* ESERCIZIO 8
//     Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
//     "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
// */
console.log("------ESERCIZIO8-----");

// // for (let i = 0; i < cars.length; i++) {
// //   const color = cars[i].color;
// //   const firstletter = color.substring(0, 1);
// //   console.log(firstletter);
// //   if (firstletter === "b") {
// //     console.log("Fizz");
// //   } else if (firstletter !== "b") {
// //     console.log("Buzz");
// //   }
// // }

// /* ESERCIZIO 9
//     Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
// */
console.log("------ESERCIZIO9-----");

// // const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

// // let newnumericArray = numericArray.sort((a, b) => a - b);
// // let i = 0;
// // while (i < 6) {
// //   console.log(newnumericArray[i]);
// //   i++;
// // }

// /* ESERCIZIO 10
//     Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
//     dell'alfabeto italiano.
//     es. [f, b, e] --> [6, 2, 5]
// */
console.log("------ESERCIZIO10-----");

// // const charactersArray = ["g", "n", "u", "z", "d"];
// // const newcharactersArray = [];

// // for (let i = 0; i < charactersArray.length; i++) {
// //   const lettera = charactersArray[i];
// //   switch (lettera) {
// //     case "g":
// //       newcharactersArray.push(7);
// //       break;
// //     case "n":
// //       newcharactersArray.push(14);
// //       break;
// //     case "u":
// //       newcharactersArray.push(21);
// //       break;
// //     case "z":
// //       newcharactersArray.push(26);
// //       break;
// //     case "d":
// //       newcharactersArray.push(4);
// //       break;
// //   }
// // }

// // console.log(newcharactersArray);
