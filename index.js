const library = [{
  id: 1,
  category: "Sciences",
  title: "Quantum physics",
  image: "./library images/download.webp",
  author: "Carl J.Pratt",
},
{
  id: 2,
  category: "Finance",
  title: "fundamentals of corporate finance",
  image: "./library images/shopping (3).webp",
  author: "Stephen A.Ross",
},
{
  id: 3,
  category: "Finance",
  title: "Stock Exchange",
  image: "./library images/shopping (4).webp",
  author: "Ross Larter",
},
{
  id: 4,
  category: "sciences",
  title: "Basic Physics",
  image: "./library images/download (1).webp",
  author: "Karl F.Kuhn",
},
{
  id: 5,
  category: "statistics",
  title: "statistics",
  image: "./library images/shopping (9).webp",
  author: "Michael J.Campbell",
},
{
  id: 6,
  category: "statistics",
  title: "statistics",
  image: "./library images/shopping (6).webp",
  author: "Michael J.Campbell",
},
{
  id: 7,
  category: "statistics",
  title: "statistics at square one",
  image: "./library images/shopping (7).webp",
  author: "Michael J.Campbell",
},
{
  id: 8,
  category: "Accounting",
  title: "Conceptual Framework",
  image: "./library images/shopping (10).webp",
  author: "SAICA",
},
{
  id: 9,
  category: "Accounting",
  title: "Financial Accounting",
  image: "./library images/shopping (12).webp",
  author: "SAICA",
},
{
  id: 10,
  category: "Accounting",
  title: "SAICA student handbook",
  image: "./library images/shopping (14).webp",
  author: "SAICA",
},
{
  id: 11,
  category: "sciences",
  title: "Bill Bryson",
  image: "./library images/images (23).jpg",
  author: "Bill Bryson",
},
{
  id: 12,
  category: "Finance",
  title: "Corporate Finance",
  image: "./library images/shopping (5).webp",
  author: "Stephen A.Ross",
}];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function() {
  displayLibraryBooks(library);
})
function displayLibraryBooks(libraryBooks) {
  let displayLibrary = libraryBooks.map(function(book) {
    return `<article class="${book.image}">
    <img src="${book.image}" class="photo" alt="${book.title}">
    <div class="item-info">
     <header>
       <h4>${book.title}</h4>
       <h4>${book.author}</h4>
     </header>
    </div>
   </article>`;
  });
  displayLibrary = displayLibrary.join("");

  sectionCenter.innerHTML = displayLibrary;
} 
