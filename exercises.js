/**
 * usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3
 */

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

// sposób 1 
// nie zadziała jak np bedzie null

const strings3 = [];

for (let i = 0; i <strings2.length; i++){
  if (strings2[i].length > 3){
    strings3.push(strings3[i]); //przekazuje elementy z danej tablicy

  }
}

// console.table(strings3);//ładniejsza forma wyświetlania tablic

// sposób 2
const filteredStrings = strings2.filter(
  (string) => {
    return typeof string === "string" && string.length >=3}
);

/**
 * Przerób podaną tablicę tak aby zawierała osoby pełnoletnie w świetle polskiego prawa
 *
 * wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const users = [
  { name: "John", age: 12 },
  { name: "Jane", age: 22 },
  { name: "Joe", age: 55 },
  { name: "Kate", age: "9" },
];

// sposób 1

// isAdult - swiadczy to boolen
// w projekcie może być nakaz, zeby pisać jednolinjkowe i wtedy bez klamer
const adults = users.filter(
  (user) => {
    return user.age >= 18
  }
);

// console.table(adults);

// sposób 2

function czyPelnoletni() {
  return users.filter((user) => user.age >= 18);
}

// console.table(czyPelnoletni());

// zadanie z gwiazdką 



// 1. stwórz strzuktórę tabelki w js
// 2. pobrac elemen z dokumentu html tak, żeby umieścić w nim stworzoną w js tabelkę


// innerHTML - jest polem na tym obiekcie
// queryselektor pozwala na obranie elementu z html 
/**
 * 1) stworzyć strukture HTMLową tabelki w JSie + dane (spopulować tabelke danymi)
 * 2) pobrać elemnt z dokumentu html tak żeby umieścić w nim stworzoną w JSie tablke
 */

// przykład HTMLa pisanego w JSie

// const html = `
//   <div>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas distinctio doloribus veniam dolorum at?
//   </div>
// `;

// tworzymy tabele - map zwraca tablicę
// join - łączenie tablic za pomocą stringa
const htmlAsArrayOfTRs = users.map((user)=>{
  return `
  <tr> 
  <td> ${user.name} </td>
  <td> ${user.age} </td>
  <td> 
  <button>DELETE</button> 
  </td>
  </tr>
  `;
});

console.log(htmlAsArrayOfTRs);

const htmlTRAsAString = htmlAsArrayOfTRs.join("");

const htmlTable = `<table>
  <tbody>
    ${htmlTRAsAString}
  </tbody>
</table>`;

const articleHTMLButJSObject = document.querySelector("#output");


// Pomiedzy article w html wleci to, co jest w innerHTML
articleHTMLButJSObject.innerHTML = htmlTable;

/**
 * POWTÓRKA CZYM JEST OBEIKT + NAZEWNICTWO pole a zmienna i metoda a funkcja
 */

const obiekt = {
  name: "John",
  sayHello: () => console.log("Hello"),
};

// obiekt.name - pole obiektu JSowego
// let zmienna = 123; // to jest zmienna
// obiekt.sayHello(); - metoda obiektu JSowego


// --------------------------------------------------------------------------------------------------------------------
/**
 * dodaj do każdego stringa w tablicy znak specjalny * w taki sposób żeby był pomiędzy każdą literką
 * np cześć => c*z*e*ś*ć
 *
 * wynik wykonsoluj za pomocą console.table
 *
 */

const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", ""];
// sposob 1
for (let i = 0; i < strings1.length; i++){
  let string = strings1[i].split("").join("*");
  // console.log(string)
} 

// sposób 2
function dziwneZnaki() {
  return strings1.map((a) => {
    const zminanStringa = a.toString();
    // toString zabezpiecza przed tym jakby w tablicy był number
    let newString = a.split("").join("*");
    // console.log(newString);

    return newString;
  });
}
// console.log(dziwneZnaki());

// sposob 3

const stringZgwiazdami = strings1.map((string)=>{
  return string.split("").join("*");
});

// {klucz:wartość} - jesli klucz = wartość to  {wisujemy jedną}
const obiekt1 = {stringZgwiazdami:stringZgwiazdami};
// console.log(stringZgwiazdami)

/**skrótowe tworzenie obiektów */
// dłuższa forma
// const user = {
//   klucz: 'wartość',
//   name: 'John',
//   age: age
// }

// krótsza forma - ekwiwalent
// const user = {
//   klucz: 'wartość',
//   name: 'John',
//   age
// }
//--------------------------------------------------------------------------------------------------------------------------
/**
 * Stwórz funkcję która będzie zwracać "zresetowaną" tablicę todos
 * tzn mając tablice todos z różnymi statusami przetwórz daną tablicę tak żeby wszystkie statusy
 * były ustawione na todo - zwróć uwage jak wygląda podany kształ danych
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos0 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

/**
 * podejście 1
 */
const nowaTablicaNaPodstawieStarejTablicy = todos0.map((todo) => {
  const newTodo = { ...todo, status: "todo" };

  return newTodo;
});

// console.table(todos0);
// console.table(nowaTablicaNaPodstawieStarejTablicy);

/**
 * podejscie 2
 */

function zmienStatus() {
  return todos0.map((task) => ({ ...task, status: "todo" }));
}

// -------------------------------------------------------------------------------------------------------------------------
/**
 * Stwórz funkcję która będzie zwracać "zarchiwizowaną" tablicę todos
 * tzn dodaj dodatkowe pole typu boolean do kazdego obiektu w tablicy
 * pole niech się nazywa archived i niech będzie ustawione na true
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos1 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];


/**SBOSOB 1 */
function archiveTodos() {
  
  const archivedTodos = todos1.map((todo) => { 
     return ({...todo, archived:true});
  });
  return archivedTodos;
};

// console.table(archiveTodos());
/**
 * stwórz funkcje która obsłuży search bar (np taki jak w aplikacjach do wyszukiwania rekordów)
 *
 * funckja będzie szukać w tablicy na podstawie pola "task",
 * funckja ma zwracać pierwszy pasujący elemnt
 *
 *
 * ⭐ ⭐ dla chętnych niech funckja posiada drugi parametr określający czy chcemy dostać
 * wszystkie pasujące elementy np podając słowo "pouczyć się" funkcja powinna zwrócić dwa elmenty z poniższej tablicy
 * gdy drugi parametr funkcji określa np że chcemy konretny rekord/element tablicy niech funckja
 * wyszukuje pierwszy pasujący element
 *
 *
 */

const todos2 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

// slowo - parametr, który chcemy wyszukać 
// function search(slowo) {
//   /**
//    * obiektTodo - element tablicy todos2 - {
//    *  task,
//    *  status
//    * }
//    */
//   return todos2.filter((obiektTodo) => {
//     if (obiektTodo.task.includes(slowo)) {
//       return true;
//     }

//     return false;
//   });
// }

function search(slowo) {
  /**
   * obiektTodo - element tablicy todos2 - {
   *  task,
   *  status
   * }
   */
  return todos2.filter((obiektTodo) => {
   
    return obiektTodo.task.includes(slowo);

  });
}

/**
 * podana tablica skłąda się ze studenów którzy są przyporządkowani każdy do jakiejś grupy
 * jednak są oni w tej samej tablicy
 *
 * swtórz funkcje która stworzy dwie lub więcej tablic w tablicy na podstawie pola group
 * dzięki temu pogrupujesz studentów i będzie można ich wyświetlić pogrupowancyh do
 * czego zachęcam żeby przećwiczyć operacje na DOMie
 */

const students = [
  { name: "John", age: 12, group: 1 },
  { name: "Jane", age: 22, group: 2 },
  { name: "Joe", age: 55, group: 1 },
  { name: "Kate", age: 9, group: 2 },
];


// ta funckja zwróci sumę wieku wszytskich studentów czyli 98
// students.forEach((acc, student)=>{
//   acc = acc + student.age;
//   return acc;
// },0);

// puch() - wstrzeli nam dany obiekt
const groupedByAge = students.reduce(
  (groups, student) => {
    if (student.age < 30) {
      groups[0].push(student);
    } else {
      groups[1].push(student);
    }

    return groups;
  },
  [[], []]
);

console.log(groupedByAge);

const groupedByGroup = students.reduce(
  (groups, student) => {
    if (student.group === 1) {
      groups[0].push(student);
    } else {
      groups[1].push(student);
    }

    return groups;
  },
  [[], []]
);
console.log(groupedBygroup);

// WIECEJ NIZ 2 GRUPY

const groupedByGroup2 = students.reduce((groups, student) => {
  if (groups[student.group]) {
    groups[student.group].push(student);
  } else {
    groups[student.group] = [student];
  }

  return groups;
}, []);

console.log(groupedByGroup2);