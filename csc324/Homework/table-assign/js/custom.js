/********************************************************************
 * Credit to Rhys Tilford for code shown in class. 
 * I was unsure where to even begin and wouldn't have gotten anything without their help
 * I asked for permission to use their example as the base of my code and the only change i could
 * make was mostly beautification of the program. I understand if I lose points or don't get credit due to
 * the code being almost entirely from an example.
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

 // complete with code to select and populate the table
  const table = document.getElementById("bhangra");

 for(let i = 0; i <= artists.length; i++) {
  let row = table.insertRow(i + 1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = artists[i].name;
  cell2.innerHTML = artists[i].birthYear;
  cell3.innerHTML = artists[i].link;
 }
