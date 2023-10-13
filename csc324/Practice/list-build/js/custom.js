/********************************************************************
 * 
 * Script to write a list of artist names into index.html
 * 
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

// grab the currently-empty div:
const listDiv = document.querySelector("#bhangra-artists");

// make the inner html:
let contents = "<ul>";
artists.forEach(function(artist) {
  contents += `<li>${artist.name}</li>`;
  contents += "<ul>";
  contents += `<li>Year of birth: ${artist.birthYear}</li>`;
  contents += `<li>Here is <a href= "${artist.link}" target="_blank">a popular song by ${artist.name}</a></li>`;
  contents += "</ul>";
})
contents = contents + "</ul>";

//insert unordered list HTML into div:
listDiv.innerHTML = contents;



