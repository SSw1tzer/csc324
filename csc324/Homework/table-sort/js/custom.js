/********************************************************************

 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
   name: "Juggy D",
   birthYear: 1981,
   link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
 },
 {
   name: "Sukhbir Singh",
   birthYear: 1969,
   link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
 },
 {
   name: "Abrar-ul-Haq",
   birthYear: 1989,
   link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
 },
 {
   name: "Rishi Rich",
   birthYear: 1970,
   link: "https://www.youtube.com/watch?v=O95-w2gACuA"
 }
]

// locate the table:
const tab = document.querySelector("#bhangra");

populateTable(arr = artists);

// now deal with event-listeners
//first, find the buttons:
const nameButton = document.querySelector("#name-button");
const dateButton = document.querySelector("#date-button");
const randomButton = document.querySelector("#random-button");

// next, add eventlisterners:
nameButton.addEventListener("click", sortByName);
dateButton.addEventListener("click", sortByDate);
randomButton.addEventListener("click", sortByRandom);


// declare listener-functions

/* 
first two functions make use of the sort method
in the sort method an object a is subtracted from an object b if the comparison is less than zero, 
the sort method sorts to a lower index than b. If the comparison is greater than zero, 
the sort method sorts b to a lower index than a. If the index is zero the two objects are assumed equal
*/ 

/* 
function to sort by name uses the javascript local comparison sort to compare the names to eachother
allowing the names to be naturally sorted alphabetically the local comparison method is needed due to 
the names containing unicode characters, also uses a sortedArray as a place holder 
of artists so as to not change the original array
*/
function sortByName() {
  let sortedArray = artists;
 sortedArray.sort((a, b) => a.name.localeCompare(b.name));
  populateTable(sortedArray);
}

/*
function to sort by date of birth, as above uses a place holder so as to not change the original array, uses 
the javascript sort function to compare the numerical years and order than from smallest to largest, ie oldest
to youngest artist.
*/
function sortByDate() {
let sortedArray = artists;
sortedArray.sort((a, b) => a.birthYear - b.birthYear);
populateTable(sortedArray);
}

/*
random function makes use of the Math.floor(Math.random() * number + 1) combination to produce a 
random number between 0 and the number input. This is placed inside a for loop to allow for a 
different number to be picked each time. Then the number is used to subset the original array and then push
that to the sortedArray.
*/
function sortByRandom() {
  let sortedArray = [];
    for (let i = 0; i <= artists.length; i++) {
      let rand = Math.floor(Math.random() * (artists.length + 1));
      sortedArray.push(artists[rand]);
  }
  populateTable(sortedArray);
}

// function to populate a table:
function populateTable(arr) {
  let contents = "<tbody>";
  // get in the header row:
  contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;
    arr.forEach(artist => {
      // open the row:
      contents += "<tr>";
      contents += `<td>${artist.name}</td>`;
      contents += `<td>${artist.birthYear}</td>`;
      contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
      // close the row:
      contents += "</tr>"
    });
    // close out the table body:
    contents += "</tbody>";
    tab.innerHTML = contents;
}
