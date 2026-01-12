document.addEventListener("DOMContentLoaded", () =>{
  const searchInput = document.getElementById('searchInput');
  const movieLinks = document.querySelectorAll('.movies__link');
  const noResults = document.querySelector('.no-results')


  searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  let found = false

  movieLinks.forEach((link) => {
    const title = link.querySelector('.movies__name').textContent.toLowerCase();
    const year  = link.querySelector('.movies__year').textContent.toLowerCase();

    const genre = link.querySelector('.movies__year').textContent
    .split("•")[1]
    .trim() 
    .toLowerCase();

    if (title.includes(searchValue)){
      link.style.display = "";
      found = true
    }else if( genre.includes(searchValue)){
      link.style.display = "";
    }else{
      link.style.display = "none"
    }
  })
    if(!found){
      noResults.style.display = "block"
    }else {
      noResults.style.display = "none"
    }

  })
})




